import {useNavigate} from "react-router-dom";
import {Field, Form, Formik} from "formik";
import axios from "axios";

export function CreatStudent(){
    const navigate = useNavigate()
    return(
        <>
            <h1>Create Student</h1>
            <Formik
                initialValues={{
                    name: "",
                    description: "",
                    action: "",
                    score: ""
                }}
                onSubmit={(values)=>{
                    axios.post("http://localhost:3001/students" , values).then(()=> {
                        alert("thanh cong")
                    })
                }}
            >
                <Form>
                    <Field name = {"name"}></Field>
                    <Field name = {"description"}></Field>
                    <Field name = {"action"}></Field>
                    <Field name = {"score"}></Field>
                    <button>Save</button>
                </Form>

            </Formik>
        </>
    )
}