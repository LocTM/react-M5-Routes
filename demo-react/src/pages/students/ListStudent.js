import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

export function ListStudent(){
    const [list,setList] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3001/students").then(res => {
            setList(res.data)
        })
    }, []);


    return(
        <>
            <h1>List Student</h1>
            {list.map((item,key) => (
                <h3>{item.name} : {item.description} : {item.action} : {item.score}</h3>
            ))}
        </>
    )
}