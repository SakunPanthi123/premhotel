'use client'
import {useState, useContext} from 'react'
import { useRouter } from 'next/navigation'
import UserContext from '@components/UserProvider'


const Login = () => {
  const {user, setUser} = useContext(UserContext)
  const router = useRouter()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await fetch('/api/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username: username, password: password})
    })
    console.log(response)
    if (response.ok) {
      alert('Login successful!')
      setUser(username)
      router.push('/')
    } else {
      alert('Credentials didnot match')
    }
  }

  return (
    <div style={{ 
      backgroundImage: `url("/assets/hotel.jpg")`, 
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      height: '83.2vh',
      position: 'relative',
    }}>
      <div className="overflow-hidden flex items-center justify-center h-full" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
        
        <div className="p-6 max-w-sm w-full bg-white shadow-md rounded-md">
          <div className="flex justify-center items-center">
            <span className="text-gray-700 font-semibold text-2xl">Login to HotelMS</span>
          </div>
          <form className="mt-4">
            <div className="flex flex-col mb-2">
              <label className="text-gray-700 mb-1" htmlFor="username">Username</label>
              <input 
              onChange={(e) => setUsername(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md" type="text" placeholder="Username" id="username" />
            </div>
            <div className="flex flex-col mb-6">
              <label className="text-gray-700 mb-1" htmlFor="password">Password</label>
              <input 
              onChange={(e) => setPassword(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md" type="password" placeholder="Password" id="password" />
            </div>
            <div className="flex justify-center items-center">
              <button 
              onClick = {handleSubmit}
              className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700" type="submit">Login</button>
            </div>
            <p className='text-blue-700 mt-3'>Forgot Password</p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login