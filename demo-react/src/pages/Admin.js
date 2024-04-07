import {Header} from "../components/Header";
import {Footer} from "../components/Footer";

export function Admin (){
    return(
        <div style={{color:"aqua", textAlign:"center"}}>
            <Header/>
            <hr/>
            <h1>HOME | ADMIN</h1>
            <hr/>
            <h1>ADMIN PAGE</h1>
            <hr/>
            <Footer/>
        </div>
    )
}