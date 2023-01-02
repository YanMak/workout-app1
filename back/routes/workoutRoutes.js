import express from 'express'
import { protect } from '../middleware/authMiddleware.js'
import { createWorkout, getWorkout, getWorkouts } from '../controllers/workouts/mainController.js'

const router = express.Router();

router.route('/').post(protect, createWorkout)
.get(protect, getWorkouts)
router.route('/:id').get(protect, getWorkout)

export default router