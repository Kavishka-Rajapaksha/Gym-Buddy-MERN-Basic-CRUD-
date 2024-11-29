import { useEffect } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

// components 

import WorkoutsDetails from '../components/WorkoutsDetails';
import WorkoutForm from "../components/WorkoutForm";


const Home =()=>{
    const {workouts,dispatch} = useWorkoutsContext()


    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch('/api/workouts'); // Send a request to the API
            const json = await response.json(); // Convert the response to JSON
    
            if (response.ok) {
               dispatch({type:'SET_WORKOUTS', payload:json});
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