import {connectToDB} from '@components/connectToDB'
import Room from '@models/Room'

export const POST = async (req) => {
    const {username, hotel_name, room_type, no_of_rooms, date, no_of_people, extra_amenities} = await req.json();

    try {
        await connectToDB();
        const newRoom = new Room({
            username: username,
            hotel_name: hotel_name,
            room_type: room_type, 
            no_of_rooms: no_of_rooms,
            date: date,
            no_of_people: no_of_people,
            extra_amenities: extra_amenities
        })

        await newRoom.save()

        return new Response(JSON.stringify(newRoom),{
            status:201
        })
        
    } catch (error){
        return new Response("Failed to book the room",{status: 500})
    }
}
