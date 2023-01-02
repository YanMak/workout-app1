import mongoose from 'mongoose'

const { ObjectId } = mongoose.Schema

const workoutLogSchema = mongoose.Schema(
    {
        completed: { type: Boolean, default: false },
        user: { type: ObjectId, ref: 'User', required: true },
        workout: { type: ObjectId, ref: 'Workout' }
    },
    {
        minimize: false,
        timestamps: true
    }
)

const WorkoutLog = mongoose.model('WorkoutLog', workoutLogSchema)

export default WorkoutLog