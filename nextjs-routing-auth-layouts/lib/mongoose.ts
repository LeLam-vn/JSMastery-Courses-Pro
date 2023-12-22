import mongoose from "mongoose";

let isConnected: boolean = false;

//Mongoose Data base 

export const connectToDatabase = async () => {
    mongoose.set('strictQuery', true);
    console.log('process.env.MONGODB_URL', process.env.MONGODB_URL)

    if (!process.env.MONGODB_URL) {
        return console.log('MISSING MONGODB URL')
    }

    if (isConnected) {
        return console.log('MongoDB is already connected');
    }
    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            dbName: 'DevFlow'
        })
        isConnected = true
        console.log('MongoDB is connected');
    } catch (error) {
        console.log('MongoDB connection failed: ', error)
    }


}