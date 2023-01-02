import express from 'express'
import { protect } from '../middleware/authMiddleware.js'
import { createExercise, getExercises, getExercise } from '../controllers/exercises/mainController.js'
import { createExerciseLog } from '../controllers/exercises/exerciseLogController.js'

const router = express.Router();

router.route('/')
.post(protect, createExercise)
.get(protect, getExercises)

router.route('/:id').get(protect, getExercise)

router.route('/log/').post(protect, createExerciseLog)

export default router;