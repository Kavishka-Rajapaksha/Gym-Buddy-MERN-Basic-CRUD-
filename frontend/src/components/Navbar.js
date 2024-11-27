import { Link } from "react-router-dom"

const Navebar = () =>{

    return(
       <header>
            <div className="container">
                <Link to = "/">
                   <h1>Gym Buddy</h1>
                </Link>
            </div>


       </header> 
    )

}

export default Navebar