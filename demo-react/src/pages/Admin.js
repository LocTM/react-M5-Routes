import {Header} from "../components/Header";
import {Footer} from "../components/Footer";
import {Navbar} from "../components/Navbar";

export function Admin (){
    return(
        <div style={{color:"aqua", textAlign:"center"}}>
            <Header/>
            <hr/>
            <Navbar></Navbar>
            <hr/>
            <h1>ADMIN PAGE</h1>
            <hr/>
            <Footer/>
        </div>
    )
}