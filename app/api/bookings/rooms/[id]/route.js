import Room from '@models/Room'


export const DELETE = async (req, {params}) => {
        
    try {
        const room = await Room.findOneAndDelete({_id: params.id})
        return new Response(JSON.stringify(room), {status: 201})
    }
    catch (error) {
        return new Response(JSON.stringify(error), {status: 500})
    }
}

export const PATCH = async (req, {params}) => {
    const { no_of_rooms, no_of_people, date } = await req.json()
    try {
        const room = await Room.findOne({_id:params.id})
        console.log(params.id)
        console.log(no_of_people)
        console.log(no_of_rooms)
        if (!room) {
            return new Response('Room not found', { status: 404 })
        }

        room.no_of_rooms = no_of_rooms
        room.date = date
        room.no_of_people = no_of_people

        await room.save()

        return new Response(JSON.stringify(room), {
            status: 200
        })
    } catch (e) {
        return new Response('An error occurred ', {
            status: 500
        })
    }
}

export const GET = async (req, {params}) => {
        
    try {
        const room = await Room.findOne({_id: params.id})
        return new Response(JSON.stringify(room), {status: 201})
    }
    catch (error) {
        return new Response(JSON.stringify(error), {status: 500})
    }
}
