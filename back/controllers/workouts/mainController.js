import mongoose from 'mongoose'
import asyncHandler from 'express-async-handler'
import Workout from '../../models/workoutModel.js'

// @desc    Post new workout
// @route   Post api/workouts
// @access  private
export const createWorkout = asyncHandler(async (req, res) =>{
    const { name, exercises } = req.body;
    const user = req.user;

    const savedWorkout = await Workout.findOne({ name }).lean();
    
    if (savedWorkout) {
        res.status(400);
        throw new Error('already has workout with the such name');
    }

    const workout = await Workout.create({ name, exercises })

    res.status(200);
    res.json(workout);

})

// @desc    Post new workout
// @route   Post api/workouts/:id
// @access  private
export const getWorkout = asyncHandler(async (req, res)=>{
    const { id } = req.params;

    const workout = await Workout.findById(id).populate('exercises').lean();

    res.status(200);
    res.json(workout);
})

export const getWorkouts = asyncHandler(async (req,res)=> {
    const workouts = await Workout.find({}).lean();

    res.status(200);
    res.json(workouts);
})