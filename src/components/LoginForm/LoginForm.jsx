import React, { useEffect, useState } from "react";
import axios from "axios";
import * as yup from "yup";
import { withFormik, Field, Form } from "formik";
import styled from "styled-components";

const LoginForm = ({ errors, status, touched, ...props }) => {
    // console.log('errors: ', errors, 'status: ', status, 'touched: ', touched)

    const [users, setUsers] = useState([]);

    // console.log('user: ', user)
    // console.log(props)

    useEffect(() => {
        status && setUsers([...users, status]);
    }, [status]);

    console.log("status: ", status);
    console.log("user: ", users);

    return (
        <StyledLoginContainer>
            <StyledForm>
                <Form>
                    <div className="input-container">
                        <label htmlFor="email">Email</label>
                        <Field
                            type="email"
                            name="email"
                            id="email"
                            placeholder="type your email"
                        />
                        {touched.email && errors.email && (
                            <p className="error">{errors.email}</p>
                        )}
                    </div>
                    <div className="input-container">
                        <label htmlFor="password">Password</label>
                        <Field
                            type="password"
                            name="password"
                            placeholder="type your password"
                            id="password"
                        />
                        {touched.password && errors.password && (
                            <p className="error">{errors.password}</p>
                        )}
                    </div>
                    <button type="submit">Login</button>
                </Form>
            </StyledForm>
        </StyledLoginContainer>
    );
};

const StyledLoginContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

const StyledForm = styled.div`
    margin: 0 auto;
    min-width: 400px;
    min-height: 300px;
    border: 1px solid #333;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem 0;

    form {
        margin: 0 auto;
        display: flex;
        min-width: 300px;
        flex-direction: column;
        justify-content: center;
        align-content: center;

        .input-container {
            margin-bottom: 2rem;
            display: flex;
            flex-direction: column;
            position: relative;

            input {
                padding: 0.5rem;
            }
        }

        .error {
            margin: 0.2rem 0;
            color: red;
            border: 1px solid red;
            font-size: 0.7rem;
            padding: 0.1rem 0.5rem;
            position: absolute;
            top: 60px;
        }

        button {
            width: 100px;
            margin-top: 3rem;
            place-self: center;
            background-color: white;
            border: 1px solid #333;
            padding: 0.5rem 1rem;
        }
    }
`;

const withFormikObj = {
    mapPropsToValues: ({ email, password, tos }) => ({
        email: email || "",
        password: password || ""
    }),
    validationSchema: yup.object().shape({
        email: yup
            .string()
            .email("Email not valid")
            .required("Email is required"),
        password: yup
            .string()
            .min(10, "Password must be 10 characters or longer")
            .required("Password is required")
            .matches(
                /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                "Must contain 8 characters, one uppercase, one lowercase, one number and one special case character"
            )
    }),
    handleSubmit: (values, { resetForm, setSubmitting, setStatus }) => {
        console.log("submitting!", values);
        axios
            .post("https://reqres.in/api/users/", values)
            .then(response => {
                console.log("response", response);
                setStatus(response.data);
                resetForm();
                setSubmitting(false);
            })
            .catch(err => console.log(err.response));
    }
};

export default withFormik(withFormikObj)(LoginForm);
