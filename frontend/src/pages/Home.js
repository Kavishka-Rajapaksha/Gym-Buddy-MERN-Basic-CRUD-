import { useEffect, useState } from "react";

// components 

import WorkoutsDetails from '../components/WorkoutsDetails';
import WorkoutForm from "../components/WorkoutForm";


const Home =()=>{
    const [workouts, setWorkouts] = useState(null)

    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch('/api/workouts'); // Send a request to the API
            const json = await response.json(); // Convert the response to JSON
    
            if (response.ok) {
                setWorkouts(json); // Update the state with the fetched data
            }
        };
    
        fetchWorkouts(); // Call the function
    }, []);
    

    return(
        <div className="home">
              <div className="workouts">
                {workouts && workouts.map((workout) => (
                    <WorkoutsDetails key ={workout._id} workout = {workout} />
                ))}
              </div>
              <WorkoutForm /> 
        </div>


    )
}

export default Home;