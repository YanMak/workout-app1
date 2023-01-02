import asyncHandler from 'express-async-handler'
import ExerciseLog from '../../models/exerciseLogModel.js'

// @desc    Post exercise log
// @route   Post api/exercises/log
// @access  private
export const createExerciseLog = asyncHandler( async (req, res) => {

    const { exercise, times, workout } = req.body;
    console.log(times);

    const exerciseLog = await ExerciseLog.create({ 
        user: res.user._id,
        exercise,
        workout,  
        times, 
    });

    res.status(200);
    res.json(exerciseLog);
    return;
})