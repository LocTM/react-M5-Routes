import {useNavigate} from "react-router-dom";

export function CreatStudent(){
    const navigate = useNavigate()
    return(
        <>
            <h1>Create Student</h1>
            <button onClick={() => {
                navigate('/', {state: {name: "Ha", age: 22, action: "Dang ngu"}})
            }}>Save</button>
            <h3>An vao nut save se luu lai vao quay ve trang list</h3>
            <button onClick={()=>{
                navigate('/admin')
            }}>Vao trang Admin</button>
        </>
    )
}