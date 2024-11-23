const express = require ("express")
const {createWorkout,getAllWorkouts, getworkout} = require('../controller/workoutController')
const router = express.Router()


//  get all workouts
router.get('/', getAllWorkouts)


// get a single workouts
router.get('/:id',getworkout)

// POST a new workouts
router.post('/',createWorkout)


// DELETE a new workouts
+router.delete('/:id',(req,res)=>{
    res.json({msg : 'delete a  workout'})
})

// UPDATE a new workouts
router.patch('/:id',(req,res)=>{
    res.json({msg : 'update a  workout'})
})


module.exports = router