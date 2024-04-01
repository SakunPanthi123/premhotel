import Room from '@models/Room'

export const GET = async (req, {params}) => {
    
    try {
        const rooms = await Room.find({username: params.user})
        return new Response(JSON.stringify(rooms), {status: 201})
    }
    catch (error) {
        return new Response(JSON.stringify(error), {status: 500})
    }
}

