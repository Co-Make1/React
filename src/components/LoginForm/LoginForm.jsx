import React from "react";
import * as yup from "yup";
import { withFormik, Field, Form } from "formik";
import styled from "styled-components";
import { connect } from "react-redux";
import { userLogin } from "../actions/actionsIndex";
import { useEffect } from "react";

const LoginForm = ({
    errors,
    status,
    touched,
    setUser,
    isLoggedIn,
    ...props
}) => {
    useEffect(() => {
        if (isLoggedIn) {
            props.history.push(`/issueboard/${localStorage.getItem("id")}`);
        }
    }, [isLoggedIn]);

    console.log("login form rendered");

    return (
        <StyledLoginContainer>
            <StyledForm>
                <Form>
                    <div className="input-container">
                        <label htmlFor="username">Username</label>
                        <Field
                            type="username"
                            name="username"
                            id="username"
                            placeholder="type your username"
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
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        padding: 0 2rem;

        .input-container {
            margin-bottom: 1.9rem;
            display: flex;
            flex-direction: column;
            position: relative;
            /* border-bottom: 1px solid #333; */

            input,
            textarea {
                padding: 0.5rem;
                border: none;
                border-bottom: 1px solid #333;
                background-color: #f8f8f8;
                font-family: "Open Sans";
            }
        }

        .error {
            margin: 0.2rem 0;
            color: rgba(255, 82, 82, 1);
            border: 1px solid rgba(255, 82, 82, 1);
            border-left: 4px solid rgba(255, 82, 82, 1);
            font-size: 0.8rem;
            background-color: white;
            padding: 0.1rem 0.5rem;
            position: absolute;
            top: 55px;
        }

        button {
            width: 100px;
            margin-top: 2rem;
            margin-bottom: 0;
            place-self: center;
            background-color: #333;
            color: white;
            border: 1px solid #333;
            padding: 0.5rem 1rem;
            cursor: pointer;
            transition: all 400ms cubic-bezier(0.175, 0.885, 0, 1);

            &:hover {
                transform: scale(1.1);
                transition: all 400ms cubic-bezier(0.175, 0.885, 0, 1);
            }

            &:active {
                transform: scale(1);
                transition: all 400ms cubic-bezier(0.175, 0.885, 0, 1);
            }
        }

        .zip-state-container {
            display: flex;
            justify-content: space-between;

            .input-container {
                width: 48%;
            }
        }

        .buttons-container {
            display: flex;
            justify-content: space-between;

            button {
                margin: 0;
            }
        }

        .description {
            .error {
                margin: 0.2rem 0;
                color: rgba(255, 82, 82, 1);
                border: 1px solid rgba(255, 82, 82, 1);
                border-left: 4px solid rgba(255, 82, 82, 1);
                font-size: 0.8rem;
                padding: 0.1rem 0.5rem;
                position: absolute;
                top: 90px;
            }
        }
    }
`;

const withFormikObj = withFormik({
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
    handleSubmit: (values, { props, setSubmitting }) => {
        console.log("submitting!", values);
        props.userLogin(values);
        setSubmitting(false);
    }
})(LoginForm);

const mapStateToProps = state => ({
    isLoggedIn: state.isLoggedIn
});

export default connect(mapStateToProps, { userLogin })(withFormikObj);
