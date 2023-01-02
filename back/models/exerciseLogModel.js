import mongoose from  'mongoose'

const { ObjectId } = mongoose.Schema

const exerciseLogSchema = mongoose.Schema(
    {
        user: { type: ObjectId, ref: 'User'},
        exercise: { type: ObjectId, ref: 'Exercise'},
        workout: { type: ObjectId, ref: 'Workout'},
        times: [{
            weight: {type: Number, required: true},
            repetitions: {type: Number, required: true},
            completed: Boolean
        }],
        completed: { type: Boolean, default: false }
},
{
    minimize: false,
    timestamps: true
}
)

const ExerciseLogModel = mongoose.model('ExerciseLog', exerciseLogSchema)

export default ExerciseLogModel