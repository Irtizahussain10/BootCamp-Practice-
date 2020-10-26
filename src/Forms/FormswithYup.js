import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';

export default function FormikForm() {

    const [emailID, setemailID] = React.useState();
    const [password, setPassword] = React.useState();

    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        onSubmit: (values) => {
            setemailID(values.email);
            setPassword(values.password);
            console.log({ emailID, password });
        },
        validationSchema: yup.object({
            email: yup.string().email().required("This field is required"),
            password: yup.string()
                .min(6, "Password is too short")
                .max(12, "password is too long") 
                .required("This field is required")
        })
    })

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <br />
                <label>
                    Enter Your Email Address Here
                    <br />
                    <input
                        type="text" id="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                    />
                </label>
                {formik.errors.email ?
                    <div>{formik.errors.email}</div>
                    : ""}
                <br />
                <label>
                    Enter Your Password
                    <br />
                    <input
                        type="password" id="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                    />
                </label>
                {formik.errors.password ?
                    <div>{formik.errors.password}</div>
                    : ""}
                <br />
                <input type="submit" />
            </form>
        </div>
    )
}
