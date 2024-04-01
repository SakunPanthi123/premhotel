'use client' // use CSR 
import '@styles/global.css'
import Navbar from '@components/Navbar'
import Footer from '@components/Footer'
import UserContext from '@components/UserProvider'
import {useState} from 'react'

const RootLayout = ({children}) => {
  const [user, setUser] = useState('')
  return (
    <html>
      <UserContext.Provider value={{user, setUser}}>
        <body className='h-screen flex flex-col'>
            <div className='sticky top-0 w-full'>
              <Navbar
                
              />
            </div>
          <div className='flex-grow'>
            {children}
          </div>
          <Footer />
        </body>
      </UserContext.Provider>
    </html>
  )
}

export default RootLayout