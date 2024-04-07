import { useEffect, useState } from "react";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";

export function EditStudent() {
    const navigate = useNavigate()
    const { id } = useParams();
    const [student, setStudent] = useState({
        name: "",
        description: "",
        action: "",
        score: ""
    });

    useEffect(() => {
        axios.get(`http://localhost:3001/students/${id}`)
            .then(res => {
                setStudent(res.data);
            })
            .catch(error => {
                console.error("Error fetching student:", error);
            });
    }, [id]);

    const handleChange = e => {
        const { name, value } = e.target;
        setStudent(prevStudent => ({
            ...prevStudent,
            [name]: value
        }));
    };

    const handleSubmit = e => {
        e.preventDefault();
        axios.put(`http://localhost:3001/students/${id}`, student)
            .then(res => {
                navigate('/')
            })

    };

    return (
        <>
            <h1>Chỉnh sửa thông tin sinh viên</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={student.name} onChange={handleChange} />
                <input type="text" name="description" value={student.description} onChange={handleChange} />
                <input type="text" name="action" value={student.action} onChange={handleChange} />
                <input type="text" name="score" value={student.score} onChange={handleChange} />
                <button type="submit" >Submit</button>
            </form>
        </>
    );
}
