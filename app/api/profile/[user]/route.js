import User from '@models/User'

export const GET = async (req, {params}) => {
    
    try {
        const profile = await User.findOne({username: params.user})
        return new Response(JSON.stringify(profile), {status: 201})
    }
    catch (error) {
        return new Response(JSON.stringify(error), {status: 500})
    }
}