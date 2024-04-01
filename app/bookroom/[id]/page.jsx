'use client'
import {useRouter} from 'next/navigation'
import {useState, useEffect} from 'react'
import {useContext} from 'react'
import UserContext from '@components/UserProvider'


const BookRoom = ({params}) => {
  const router = useRouter()
  const {user, setUser} = useContext(UserContext)
  const [noR, setNoR] = useState()
  const [date, setDate] = useState()
  const [noP, setNoP] = useState()

  const submit = async () => {
    const hotelName = document.querySelector('select').value;
    const selectedAmenities = [];
    document.querySelectorAll('input[type=checkbox]:checked').forEach((checkbox) => {
      selectedAmenities.push(checkbox.name);
    });

    const response = await fetch('/api/bookroom', {
        method: 'POST',
        body: JSON.stringify({

            username: user,
            hotel_name: hotelName,
            room_type: params.id,
            no_of_rooms: noR,
            date: date,
            no_of_people: noP,
            extra_amenities: selectedAmenities.join(', '),
        })
    })
    if (response.ok){
        alert('Room booked successfully')
        router.push('/profile')
    } else {
        alert('Failed to book the room')
    }
  }


  return (
    <div>
        <div className="max-w-md mx-auto mt-8 bg-white rounded p-8 shadow-md">
        <h2 className="text-xl font-bold mb-4">Book {
            params.id === 's' ? 'Small Room' : params.id === 'd' ? 'Double room' : 'Family Room'
        }</h2>
        <form 
            onSubmit={(e)=>{
                e.preventDefault()
                if (user == ''){
                    alert('Please login to book a room')
                    return
                }
                submit()
                
        }}
        >
            <div className="mb-4">
                <label for="hotel_name" className="block text-gray-700 font-bold mb-2">Hotel Name:</label>
                {/* dropdown input for 3 different hotels, Hilton, Paradise and Ratna */}
                
                <select className='bg-white'>
                    <option value="Hilton">Hilton, Kalimati, Kathmandu</option>
                    <option value="Paradise">Paradise, Basundhara, Kathmandu</option>
                    <option value="Ratna">Ratna, Narayan Chowk, Bhaktapur</option>
                </select>

                </div>
            <div className="mb-4">
                <label for="no_of_rooms" className="block text-gray-700 font-bold mb-2">Number of Rooms:</label>
                <input onChange={
                    (e)=>{
                        setNoR(e.target.value)
                }} type="number" id="no_of_rooms" name="no_of_rooms" className="form-input w-full" required />
            </div>
            <div className="mb-4">
                <label for="date" className="block text-gray-700 font-bold mb-2">Date:</label>
                <input 
                onChange={
                    (e)=>{
                        setDate(e.target.value)
                }}
                type="date" id="date" name="date" className="form-input w-full" required />
            </div>
            <div className="mb-4">
                <label for="no_of_people" className="block text-gray-700 font-bold mb-2">Number of People:</label>
                <input 
                onChange={(e)=>{
                    setNoP(e.target.value)
                }}
                type="number" id="no_of_people" name="no_of_people" className="form-input w-full" required />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Extra Amenities:</label>
                <div>
                    <input type="checkbox" id="wifi" name="wifi" className="mr-2" />
                    <label for="wifi" className="mr-4">Wifi</label>
                    <input type="checkbox" id="breakfast" name="breakfast" className="mr-2" />
                    <label for="breakfast" className="mr-4">Breakfast</label>
                    <input type="checkbox" id="parking" name="parking" className="mr-2" />
                    <label for="parking">Parking</label>
                </div>
            </div>
            <div className="mt-6">
                <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">Book Now</button>
            </div>
        </form>
    </div>
    </div>
  )
}

export default BookRoom