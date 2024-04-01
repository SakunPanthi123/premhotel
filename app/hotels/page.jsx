import React from 'react'
import Link from 'next/link'

const Hotels = () => {
  return (
    <div>


      {/* first card */}
      <div className='md:grid-cols-3 gap-4 p-4 grid grid-cols-1'>
        <div className='bg-gray-100 shadow-md pt-4 rounded-lg h-[460px] flex flex-col justify-between'>
          <div>
            <h2 className='text-2xl font-medium p-2 text-center'>Hotel Hilton</h2>
            <img src='https://tophotel.news/wp-content/uploads/2020/04/67268540_XL.jpg' className='h-48 w-full object-cover' />
            <p className='p-2'>Hotel Hilton is the best hotel in the entire norther hemisphere. It has the best view and the best food. The hotel is equipped with all the basic amenities and facilities. The room is spacious and has a comfortable bed, a wardrobe, a study table, and a television. The room has an attached bathroom with all the modern facilities.</p>
          </div>

          <Link
            href='hotels/Hilton'
          >
            <button className='bg-blue-500 text-white p-2 w-full rounded-b-lg'>Learn More</button>
          </Link>
        </div>


        {/* second card */}
        <div className='bg-gray-100 shadow-md pt-4 rounded-lg h-[460px] flex flex-col justify-between'>
          <div>
            <h2 className='text-2xl font-medium p-2 text-center'>Hotel Paradise</h2>
            <img src='https://gos3.ibcdn.com/833e8aaa55fb11eda2020a58a9feac02.jpg' className='h-48 w-full object-cover' />
            <p className='p-2'>Hotel Paradise is the best hotel in the entire norther hemisphere. It has the best view and the best food. The hotel is equipped with all the basic amenities and facilities. The room is spacious and has a comfortable bed, a wardrobe, a study table, and a television. The room has an attached bathroom with all the modern facilities.</p>
          </div>

          <Link
            href='hotels/Paradise'
          >
            <button className='bg-blue-500 text-white p-2 w-full rounded-b-lg'>Learn More</button>
          </Link>

        </div>


        {/* 3rd card */}
        <div className='bg-gray-100 shadow-md pt-4 rounded-lg h-[460px] flex flex-col justify-between'>
          <div>
            <h2 className='text-2xl font-medium p-2 text-center'>Hotel Ratna</h2>
            <img src='https://media.cntraveler.com/photos/642b0c8abddacefaeaf94fb8/16:9/w_2560%2Cc_limit/Villa%2520Palladio%2520Jaipur_80.jpg' className='h-48 w-full object-cover' />
            <p className='p-2'>Ratna Hotel is a hotel that is located in the heart of the city. It is equipped with all the basic amenities and facilities. The room is spacious and has a comfortable bed, a wardrobe, a study table, and a television. The room has an attached bathroom with all the modern facilities.</p>
          </div>

          <Link
            href='hotels/Ratna'
          >
            <button className='bg-blue-500 text-white p-2 w-full rounded-b-lg'>Learn More</button>
          </Link>
        </div>
      </div>



    </div>
  )
}

export default Hotels