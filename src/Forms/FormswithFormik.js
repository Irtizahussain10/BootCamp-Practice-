import React from 'react';
import { useFormik } from 'formik';

export default function FormikForm() {

    const [emailID, setemailID] = React.useState("");
    const [password, setPassword] = React.useState("");

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
        validate: (values) => {
            let error = {};
            if (!values.email) {
                error.email = "email is required"
            }
            if (!values.password) {
                error.password = "password is required"
            }
            return error
        }
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
