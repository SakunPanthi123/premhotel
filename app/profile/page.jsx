'use client'
import { useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import UserContext from '@components/UserProvider'

const Profile = () => {

  const { user } = useContext(UserContext);

  const [profile, setProfile] = useState({});
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch(`api/profile/${user}`)
      .then(response => response.json())
      .then(data => {
        setProfile(data);
        console.log(data);
      })
      .catch(error => console.error('Error:', error));
  }, []);

  useEffect(() => {
    fetch(`api/bookings/${user}`)
      .then(response => response.json())
      .then(data => {
        setBookings(data);
        console.log(data);
      })
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div className='p-8'>
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <p className="font-bold">Username: <span className="font-normal">{profile.username}</span></p>
        <p className="font-bold">Address: <span className="font-normal">{profile.address}</span></p>
        <p className="font-bold">Age: <span className="font-normal">{profile.age}</span></p>
        <p className="font-bold">Gender: <span className="font-normal">{profile.gender}</span></p>
      </div>
      <h1 className="text-2xl font-bold mb-4">My Bookings</h1>
      {bookings.map(booking => (
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div key={booking._id} className="mb-4">
            <p className="font-bold">Room Type: <span className="font-normal">{
              booking.room_type === 's' ? 'Small Room' : booking.room_type === 'd' ? 'Double room' : 'Family Room'
            }</span></p>
            <p className="font-bold">Hotel Name: <span className="font-normal">{booking.hotel_name}</span></p>
            <p className="font-bold">Number of Rooms: <span className="font-normal">{booking.no_of_rooms}</span></p>
            <p className="font-bold">Date: <span className="font-normal">{booking.date.split('T')[0]}</span></p>
            <p className="font-bold">Number of People: <span className="font-normal">{booking.no_of_people}</span></p>
            <p className="font-bold">Extra Amenities: <span className="font-normal">{booking.extra_amenities}</span></p>
            <div className='flex justify-end mt-4'>
              <Link 
              href = {`/edit-booking/${booking.room_type}/${booking._id}`}
              >
                <button
                  className='p-2 bg-slate-800 text-white rounded-md mr-2'
                
                >
                  Edit Booking
                </button>
              </Link>
              <button
                onClick={() => {
                  const conf = confirm('Are you sure you want to cancel this booking?');
                  if (!conf) return;
                  fetch(`api/bookings/rooms/${booking._id}`, {
                    method: 'DELETE',
                  })
                    .then(response => response.json())
                    .then(data => {
                      console.log(data);
                      setBookings(bookings.filter(b => b._id !== booking._id));
                    })
                    .catch(error => console.error('Error:', error));
                }}
                className='p-2 bg-slate-800 text-white rounded-md'>
                Cancel Booking
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Profile