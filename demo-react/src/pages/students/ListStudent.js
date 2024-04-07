import {useLocation} from "react-router-dom";

export function ListStudent(){
    const {state} = useLocation();
    console.log(state)

    return(
        <>
            <h1>List Student</h1>
        </>
    )
}