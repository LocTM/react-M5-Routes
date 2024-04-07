import {Header} from "../components/Header";
import {Footer} from "../components/Footer";

export function Home (){
    return(
        <div style={{color:"red", textAlign:"center"}}>
            <Header/>
            <hr/>
            <h1>HOME | ADMIN</h1>
            <hr/>
            <h1>HOME PAGE</h1>
            <hr/>
            <Footer/>
        </div>
    )
}