import {Header} from "../components/Header";
import {Footer} from "../components/Footer";
import {Navbar} from "../components/Navbar";

export function Home (){
    return(
        <div style={{color:"red", textAlign:"center"}}>
            <Header/>
            <hr/>
            <Navbar></Navbar>
            <hr/>
            <h1>HOME PAGE</h1>
            <hr/>
            <Footer/>
        </div>
    )
}