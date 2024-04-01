// signup POST route that takes the req body to get username and password and creates a User model and saves it to the database.

import {connectToDB} from '@components/connectToDB'
import User from '@models/User'

export const POST = async (req) => {
    const {username, password, address, age, gender} = await req.json();

    try {
        await connectToDB();
        const newUser = new User({
            username: username, 
            password: password,
            address: address,
            age: age,
            gender: gender
        })

        await newUser.save()

        return new Response(JSON.stringify(newUser),{
            status:201
        })
    } catch (error){
        return new Response("Failed to create a new User",{status: 500})
    }
}
