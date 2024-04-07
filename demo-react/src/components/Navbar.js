import {Link} from "react-router-dom";

export function Navbar(){
    return(
        <>
            <h1>
                <Link to={"/"}>HOME</Link> |
                <Link to={"/admin"}>ADMIN</Link>
                <hr/>
            </h1>
        </>
    )
}