import asyncHandler from 'express-async-handler'
import Exercise from '../../models/exerciseModel.js'

// @desc    Post exercise
// @route   Post api/exercises
// @access  private
export const createExercise = asyncHandler( async (req, res) => {
    const { name, times, imageIndex } = req.body;

    const savedExercise = await Exercise.findOne({ name }).lean();
    
    if (savedExercise) {
        res.status(400);
        throw new Error('already has exercise with the such name')
    }

    const exercise = await Exercise.create({ name, times, imageIndex });

    res.status(200);
    res.json(exercise);
    return;
})

// @desc    Get exercises
// @route   Get api/exercises
// @access  private
export const getExercises = asyncHandler(async (req,res)=>{
    const exercises = await Exercise.find({}).lean();
    
    res.status(200);
    res.json(exercises)
})

export const getExercise = asyncHandler( async (req, res)=>{
    const { id } = req.params
    const exercise = await Exercise.findById(id).lean()

    res.status(200);
    res.json(exercise)
})