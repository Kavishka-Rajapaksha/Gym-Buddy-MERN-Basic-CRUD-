
const WorkoutsDetails = ({ workout }) => {

    const handlerClick = async () =>{
        const response = await fetch('/api/workouts/'+ workout._id, {
            method: 'DELETE',
        })
    }

    return (
        <div className="workout-details">
            <h4>{workout.title}</h4>
            <p><strong>Load (kg): </strong>{workout.load}</p>
            <p><strong>Reps: </strong>{workout.reps}</p>
            <p>{workout.createdAt}</p>
            <span onClick = {handlerClick}></span>
        </div> // Properly close the div here
    );
};

 export default WorkoutsDetails;