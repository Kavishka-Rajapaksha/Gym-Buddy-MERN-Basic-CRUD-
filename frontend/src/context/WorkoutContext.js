import { createContext } from "react";

export const WorkoutsContext = createContext();

//according to the this situation childre is app component
const WorkoutsContextProvider = ({children})=>{

    return (
        <WorkoutsContext.Provider>
            {children}
        </WorkoutsContext.Provider>
    )
}