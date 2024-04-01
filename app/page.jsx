'use client'
import InfoCard from '@components/InfoCard'
import Link from 'next/link'
import {useContext} from 'react'
import UserContext from '@components/UserProvider'

const Home = () => {
  const {user, setUser} = useContext(UserContext)
  return (
    <div>
      {/* title section */}
      <div className='flex flex-col justify-center bg-gray-700 px-16 py-[245px]' style={{
        backgroundImage: `url('https://images.pond5.com/blurry-background-plate-city-street-footage-089926238_prevstill.jpeg')`,
      }}>
        <h1 className='font-bold text-[72px] text-center text-white'>
            Welcome {user ? `${user.charAt(0).toUpperCase()}${user.slice(1)}` : 'to HotelMS'}
        </h1>
        <p className='text-center text-white text-3xl'>
          Your ultimate destination for booking best hotel rooms across the world
        </p>
        <div className='flex justify-center'>
          <div className='px-4 py-2 bg-yellow-500 rounded-full mt-4'>
            <Link className='font-bold' href='/rooms'>
              BOOK NOW
            </Link>
          </div>
        </div>
      </div>
      {/* hero section */}
      <div className='md:flex md:gap-4 md:p-4 grid-cols-1'>
        <InfoCard 
          title='Order Extra Amenities'
          content='Easily add extra amenities like breakfast, parking, wifi, and other services in your booking. You can also view the menu and order food from the website.'
        />
        <InfoCard 
          title='Track Bookings'
          content='Keep track of all your bookings and manage them with ease. Updating your date to suit your new need has never been easier in our hotels.'
        />
        <InfoCard 
          title='Find best hotels'
          content='Find the best hotels across the country and book them with ease. We have a wide range of hotels to choose from.'
        />
      </div>
    </div>

  )
}

export default Home