import {Header} from "../components/Header";
import {Footer} from "../components/Footer";
import {Navbar} from "../components/Navbar";
import {Link, Outlet} from "react-router-dom";

export function Home (){
    return(
        <div style={{color:"red", textAlign:"center"}}>
            <Header/>
            <hr/>
            <Navbar></Navbar>
            <Link to={'/'}>List Student</Link>  |
            <Link to={'/create-student'}>Create Student</Link>  |
            <hr/>
            <Outlet></Outlet>
            <hr/>
            <Footer/>
        </div>
    )
}