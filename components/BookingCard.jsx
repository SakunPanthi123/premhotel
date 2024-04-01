import React from 'react'
import Link from 'next/link'

const BookingCard = ({id, title, img, content }) => {
  return (

    <div className='bg-gray-100 shadow-md pt-4 rounded-lg h-[460px] flex flex-col justify-between'>
      <div>
        <h2 className='text-2xl font-medium p-2 text-center'>{title}</h2>
        <img src={img} className='h-48 w-full object-cover' />
        <p className='p-2'>{content}</p>
      </div>

      <div>
        <Link
          href={`/bookroom/${id}`}
        >
          <button 
           
          className='bg-blue-500 text-white p-2 w-full rounded-b-lg'>
            Book Now
          </button>
        </Link>
      </div>
    </div>

  )
}

export default BookingCard