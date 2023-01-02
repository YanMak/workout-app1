import mongoose from 'mongoose'
import dotenv from 'dotenv'

//dotenv.config();
mongoose.set('strictQuery', false);

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            //useUnifiedTopology: true,
            //useNewUrlParser: true,
            //useCreateIndex: true,
            //useFindAndModify: false
        });

        console.log(`MongoDB connected: ${conn.connection.host}`)

    }
    catch (error) {
        console.log(`error: ${error.message}`);
        process.exit(1);
    }
}

//console.log(`process.env.NODE_ENV=${process.env.NODE_ENV}`);
//console.log(`process.env.MONGO_URI=${process.env.MONGO_URI}`);

//connectDB();