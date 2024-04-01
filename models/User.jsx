// this is the user model

import {Schema, model, models} from 'mongoose'; 

const UserSchema = new Schema({
    username: {
        type: String,
        required: [true, 'Username is required'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    address: {
        type: String,
        required: [true, 'Address is required']
    },
    age: {
        type: Number,
        required: [true, 'Age is required']
    },
    gender: {
        type: String,
        required: [true, 'Gender is required'],
    }
})  

const User = models.User || model("User", UserSchema);

export default User;