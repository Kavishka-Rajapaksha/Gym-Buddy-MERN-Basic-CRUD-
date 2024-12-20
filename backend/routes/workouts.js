const express = require ("express")

const {  createWorkout,
         getAllWorkouts,
         getWorkout,
         deleteWorkout,
         updateWorkout} = require('../controller/workoutController')

const router = express.Router()


//  get all workouts
router.get('/', getAllWorkouts)

// get a single workouts
router.get('/:id',getWorkout)

// POST a new workouts
router.post('/',createWorkout)

// DELETE a new workouts
+router.delete('/:id',deleteWorkout)

// UPDATE a new workouts
router.patch('/:id',updateWorkout)


module.exports = router