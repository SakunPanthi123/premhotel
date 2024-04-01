import BookingCard from '@components/BookingCard'
import React from 'react'

const Rooms = () => {
  return (
    <div className='p-8 md:grid md:grid-cols-3 grid grid-cols-1 gap-4'>
      <BookingCard 
        id='s'
        title='Single Room'
        img='https://hotelvilnia.lt/wp-content/uploads/2018/06/DSC07685-HDR-Edit-Edit.jpg'
        content='Single room gives the customer the privacy and comfortable stay. It is equipped with all the basic amenities and facilities. The room is spacious and has a comfortable bed, a wardrobe, a study table, and a television. The room has an attached bathroom with all the modern facilities.'
      />
      <BookingCard 
        id='d'
        title='Double Room'
        img='https://cdn.traveltripper.io/site-assets/512_863_12597/media/2018-02-22-041437/large_DDBDB.jpg'
        content='Double room gives the customer the privacy and comfortable stay.  The room is spacious and has a comfortable bed, a wardrobe, a study table, and a television. The room has an attached bathroom with all the modern facilities.'
      />
      <BookingCard 
        id='f'
        title='Family Suite'
        img='https://www.riversideparkhotel.com/wp-content/uploads/2022/02/Photo-071-1366x768-fp_mm-fpoff_0_0.jpg'
        content='Family suite is a spacious room with a separate living area and a bedroom.  The room has a comfortable bed, a chandelier, a fridge, a kitchen, kids toys, coffee machine, hair dryer, a wardrobe, a study table, and a television. The room has an attached bathroom with all the modern facilities. '
      />
    </div>
  )
}

export default Rooms