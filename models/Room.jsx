import {Schema, model, models} from 'mongoose'; 

const RoomSchema = new Schema({
    username: {
        type: String,
        required: [true, 'Username is required'],
    },
    hotel_name: {
        type: String,
        required: [true, 'Hotel name is required']
    },
    room_type: {
        type: String,
        required: [true, 'Room type is required']
    },
    no_of_rooms: {
        type: Number,
        required: [true, 'Number of rooms is required']
    },
    date: {
        type: Date,
        required: [true, 'Date is required']
    },
    no_of_people: {
        type: Number,
        required: [true, 'Number of people is required']
    },
    extra_amenities: {
        type: String,
        required: [true, 'Extra amenities are required']
    }
})

const Room = models.Room || model("Room", RoomSchema);

export default Room;