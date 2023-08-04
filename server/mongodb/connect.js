import mongoose from "mongoose";

const connectDB = (url) => {
    mongoose.set('strictQuery', true)

    mongoose.connect(url)
        .then(() => console.log('MongoDB connected'))
        .catch((error) => console.log('failed to connect with mongoDB',error))

}

export default connectDB