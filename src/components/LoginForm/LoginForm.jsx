import React, { useEffect, useState } from "react";
import * as yup from "yup";
import { withFormik, Field, Form } from "formik";
import styled from "styled-components";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const LoginForm = ({ errors, status, touched, setUser, ...props }) => {
    // console.log('errors: ', errors, 'status: ', status, 'touched: ', touched)

    // const [users, setUsers] = useState([]);

    // console.log('user: ', user)
    // console.log(props)

    // useEffect(() => {
    //     status && setUsers([...users, status]);
    // }, [status]);

    // console.log("status: ", status);
    // console.log("user: ", users);

    console.log("login form rendered");
    // console.log(props);

    return (
        <StyledLoginContainer>
            <StyledForm>
                <Form>
                    <div className="input-container">
                        <label htmlFor="username">username</label>
                        <Field
                            type="username"
                            name="username"
                            id="username"
                            placeholder="type your email"
                        />
                        {touched.username && errors.username && (
                            <p className="error">{errors.username}</p>
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

export const StyledLoginContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

export const StyledForm = styled.div`
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
            /* border-bottom: 1px solid #333; */

            input {
                padding: 0.5rem;
                border: none;
                border-bottom: 1px solid #333;
                background-color: #f8f8f8;
            }
        }

        .error {
            margin: 0.2rem 0;
            color: rgba(255, 82, 82, 1);
            border: 1px solid rgba(255, 82, 82, 1);
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

        .zip-state-container {
            display: flex;
            justify-content: space-between;

            .input-container {
                width: 48%;
            }
        }
    }
`;

const withFormikObj = {
    mapPropsToValues: ({ username, password, tos }) => ({
        username: username || "",
        password: password || ""
    }),
    validationSchema: yup.object().shape({
        username: yup
            .string()
            // .email("Email not valid")
            .required("Username is required"),
        password: yup
            .string()
            // .min(10, "Password must be 10 characters or longer")
            .required("Password is required")
        // .matches(
        //     /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        //     "Must contain 8 characters, one uppercase, one lowercase, one number and one special case character"
        // )
    }),
    handleSubmit: (
        values,
        { props: { setUser, history }, resetForm, setSubmitting, setStatus }
    ) => {
        console.log("submitting!", values);
        console.log("history", history);
        console.log("setUser", setUser);
        axiosWithAuth()
            .post("/auth/login", values)
            .then(response => {
                console.log("response: ", response);
                localStorage.setItem("token", response.data.token);
                setUser(response.data.user);
                history.push(`/issueboard/${response.data.user.id}`);
            })
            .catch(err => {
                localStorage.removeItem("token");
                console.log("invalid login: ", err);
            });
    }
};

export default withFormik(withFormikObj)(LoginForm);
