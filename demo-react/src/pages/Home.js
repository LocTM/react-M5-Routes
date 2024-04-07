import {Header} from "../components/Header";
import {Footer} from "../components/Footer";
import {Navbar} from "../components/Navbar";
import {Outlet} from "react-router-dom";

export function Home (){
    return(
        <div style={{color:"red", textAlign:"center"}}>
            <Header/>
            <hr/>
            <Navbar></Navbar>
            <hr/>
            <Outlet></Outlet>
            <hr/>
            <Footer/>
        </div>
    )
}