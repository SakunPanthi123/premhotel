'use client'
import Link from 'next/link'
import {useState} from 'react'
import {useRouter} from 'next/navigation'

const Register = () => {
  const router = useRouter()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [address, setAddress] = useState('')
  const [age, setAge] = useState()
  const [gender, setGender] = useState('')

  const handleSubmit = async (e) => {

    e.preventDefault()
    const response = await fetch('/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        { 
        username: username,
        password: password,
        address: address,
        age: age,
        gender: gender,
         })
    })
    console.log(response)
    if (response.ok) {
      alert('Account created successfully!')
      router.push('/login')
    } else {
      alert('Username is already taken')
    }
  }

  return (
    <div style={{ 
      backgroundImage: `url("/assets/hotel.jpg")`, 
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      height: '100.2vh',
      position: 'relative',
    }}>
      <div className="overflow-hidden flex items-center justify-center h-full" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
        
        <div className="p-6 max-w-sm w-full bg-white shadow-md rounded-md">
          <div className="flex justify-center items-center">
            <span className="text-gray-700 font-semibold text-2xl">Register on HotelMS</span>
          </div>
          <form className="mt-4">
            <div className="flex flex-col mb-2">
              <label className="text-gray-700 mb-1" htmlFor="username">Username</label>
              <input 
              onChange = {(e) => setUsername(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md" type="text" placeholder="Username" id="username" />
            </div>
            <div className="flex flex-col mb-2">
              <label className="text-gray-700 mb-1" htmlFor="password">Password</label>
              <input 
              onChange = {(e) => setPassword(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md" type="password" placeholder="Password" id="password" />
            </div>
            <div className="flex flex-col mb-2">
              <label className="text-gray-700 mb-1" htmlFor="password">Address</label>
              <input 
              onChange = {(e) => setAddress(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md" type="text" placeholder="Your full adress" />
            </div>
            <div className="flex flex-col mb-2">
              <label className="text-gray-700 mb-1" >Age</label>
              <input 
              onChange = {(e) => setAge(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md" type="text" placeholder="Age number" />
            </div>
            <div className="flex flex-col mb-2">
              <label className="text-gray-700 mb-1" >Gender</label>
              <input 
              onChange = {(e) => setGender(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md" type="text" placeholder="M / F" />
            </div>
            <div className="flex justify-center items-center">
              <button 
              onClick = {handleSubmit}
              className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700" type="submit">Register</button>
            </div>
            <Link href='/login' className='text-blue-700 mt-3'>Already have an account? Login here!</Link>
            <br></br>
            <Link href='' className='text-blue-700 mt-1'>Forgot Password</Link>

          </form>
        </div>
      </div>
    </div>
  )
}

export default Register