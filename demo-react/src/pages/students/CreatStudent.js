import {useNavigate} from "react-router-dom";
import {ErrorMessage, Field, Form, Formik} from "formik";
import axios from "axios";
import * as Yup from "yup";

const validateSchema = Yup.object().shape({
    name:Yup.string()
        .min(2,"Ngắn quá")
        .max(20, "Dài quá")
        .required("Đừng để trống"),
    description:Yup.string()
        .min(2,"Ngắn quá")
        .max(20, "Dài quá")
        .required("Đừng để trống"),
    action:Yup.string()
        .min(2,"Ngắn quá")
        .max(20, "Dài quá")
        .required("Đừng để trống"),
    score:Yup.string()
        .min(2,"Ngắn quá")
        .max(20, "Dài quá")
        .required("Đừng để trống"),

})
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
                validationSchema={validateSchema}
                onSubmit={(values)=>{
                    axios.post("http://localhost:3001/students" , values).then(()=> {
                        navigate('/')
                    })
                }}
            >
                <Form>
                    <Field name = {"name"}></Field>
                    <ErrorMessage name={'name'}></ErrorMessage>
                    <Field name = {"description"}></Field>
                    <ErrorMessage name={'description'}></ErrorMessage>
                    <Field name = {"action"}></Field>
                    <ErrorMessage name={'action'}></ErrorMessage>
                    <Field name = {"score"}></Field>
                    <ErrorMessage name={'score'}></ErrorMessage>
                    <button>Save</button>
                </Form>

            </Formik>
        </>
    )
}