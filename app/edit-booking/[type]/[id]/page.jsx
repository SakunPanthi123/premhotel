'use client'
import {useState, useEffect} from 'react'
import {useContext} from 'react'
import UserContext from '@components/UserProvider'
import {useRouter} from 'next/navigation'


const EditRoom = ({params}) => {
  const router = useRouter()
  const {user, setUser} = useContext(UserContext)
  const [hotelName, setHotelName] = useState()
  const [noR, setNoR] = useState()
  const [date, setDate] = useState()
  const [noP, setNoP] = useState()

  useEffect(() => {
    fetch(`/api/bookings/rooms/${params.id}`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setHotelName(data.hotel_name)
        setNoR(data.no_of_rooms)
        setDate(data.date.split('T')[0])
        setNoP(data.no_of_people)

      })
      .catch(error => console.error('Error:', error));
  }
  , [])

  const submit = async () => {
    const response = await fetch(`/api/bookings/rooms/${params.id}`, {
        method: 'PATCH',
       
        body: JSON.stringify({
            no_of_rooms: noR,
            date: date,
            no_of_people: noP,
        })
    })
    console.log(response)
    if (response.ok){
        alert('Room updated successfully')
        router.push('/profile')
    } else {
        alert('Failed to update the room')
    }
  }


  return (
    <div>
        <div className="max-w-md mx-auto mt-8 bg-white rounded p-8 shadow-md">
        <h2 className="text-xl font-bold mb-4">Edit your {
            params.type === 's' ? 'Small Room' : params.type === 'd' ? 'Double room' : 'Family Room'
        } booking at {hotelName}</h2>
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
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="no_of_rooms">
                    Number of Rooms
                </label>
                <input 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    id="no_of_rooms" 
                    type="number" 
                    value={noR}
                    onChange={(e) => setNoR(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
                    Date
                </label>
                <input 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    id="date" 
                    type="date" 
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />

            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="no_of_people">
                    Number of People
                </label>
                <input 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    id="no_of_people" 
                    type="number" 
                    value={noP}
                    onChange={(e) => setNoP(e.target.value)}
                />
            </div>

            <div className="mt-6">
                <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">Update</button>
            </div>
        </form>
    </div>
    </div>
  )
}

export default EditRoom