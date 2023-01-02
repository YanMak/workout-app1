import express from 'express'
import morgan from 'morgan'
import dotenv from 'dotenv'
import colors from 'colors'

// Routes
import userRouter from './routes/userRoutes.js'
import exercisesRouter from './routes/exercisesRoutes.js'
import workoutRouter from './routes/workoutRoutes.js'

// Config
import { connectDB } from '../back/config/db.js'

// Middleware
import { errorHandler, notFound } from './middleware/errorMiddleware.js'

dotenv.config();

connectDB();

const app = express();

if (process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
    console.log(process.env.NODE_ENV);
    console.log(typeof process.env.NODE_ENV);
}

app.use(express.json())

app.use('/api/users', userRouter);

app.use('/api/exercises', exercisesRouter);

app.use('/api/workouts', workoutRouter);

app.use(errorHandler);
app.use(notFound);

/* TEST. all works
app.get('/', (req, res) => {
    res.send('Hello main page')
  })*/
//app.get('/', getUserProfile);  

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold);
});