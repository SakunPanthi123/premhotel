// create route to handle the POST request for checking whether username and password exist in the database

import {connectToDB} from '@components/connectToDB'
import User from '@models/User'

export const POST = async (req) => {
    const {username, password} = await req.json();

    try {
        await connectToDB();
        const user = await User.findOne({username: username, password: password});
        if (user){
            return new Response(JSON.stringify(user),{
                status: 201
            })
        } else {
            return new Response("User not found", {status: 404})
        }
    } catch (error){
        return new Response("Failed to login", {status: 500})
    }
}