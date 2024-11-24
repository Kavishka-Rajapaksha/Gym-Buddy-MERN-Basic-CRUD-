require('dotenv').config();

const express = require ('express');
const mongoose = require('mongoose');   
const workoutRoutes = require('./routes/workouts.js');


//  express app
const app = express()

//middleware
app.use(express.json())

// routes
app.use('/api/workouts', workoutRoutes)

// database connectivity 
mongoose.connect(process.env.MONG_URI)
    .then(()=>{

    // listninng to thw port
    app.listen(process.env.PORT, ()=>{
       console.log('Successfully connect to the DB & listning to the port : ',process.env.PORT);
}) 
    })
    .catch((error)=>{
        console.log(error)
    })

