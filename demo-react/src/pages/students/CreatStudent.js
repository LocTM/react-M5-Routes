import {useNavigate} from "react-router-dom";

export function CreatStudent(){
    const navigate = useNavigate()
    return(
        <>
            <h1>Create Student</h1>
            <button onClick={() => {
                navigate('/')
            }}>Quay lai trang chu</button>
            <button onClick={()=>{
                navigate('/admin')
            }}>Vao trang Admin</button>
        </>
    )
}