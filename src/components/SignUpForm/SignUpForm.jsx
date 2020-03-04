import React from "react";
import * as yup from "yup";
import { withFormik, Field, Form } from "formik";
import { connect } from "react-redux";
import { userSignup } from "../actions/actionsIndex";

import { StyledLoginContainer, StyledForm } from "../LoginForm/LoginForm";

const SignUpForm = ({ errors, status, touched, ...props }) => {
    console.log("errors: ", errors);
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
                    <div className="input-container">
                        <label htmlFor="emailConfirm">Email</label>
                        <Field
                            type="email"
                            name="email"
                            placeholder="email"
                            id="email"
                        />
                        {touched.email && errors.email && (
                            <p className="error">{errors.email}</p>
                        )}
                    </div>
                    <div className="input-container">
                        <label htmlFor="city">City</label>
                        <Field
                            type="text"
                            name="city"
                            placeholder="type your city"
                            id="city"
                        />
                        {touched.city && errors.city && (
                            <p className="error">{errors.city}</p>
                        )}
                    </div>
                    <div className="zip-state-container">
                        <div className="input-container">
                            <label htmlFor="zip_code">Zip Code</label>
                            <Field
                                type="text"
                                name="zip_code"
                                placeholder="type your zip-code"
                                id="zip_code"
                            />
                            {touched.zip_code && errors.zip_code && (
                                <p className="error">{errors.zip_code}</p>
                            )}
                        </div>
                        <div className="input-container">
                            <label htmlFor="state">State</label>
                            <Field
                                type="text"
                                name="state"
                                placeholder="type your state"
                                id="state"
                            />
                            {touched.state && errors.state && (
                                <p className="error">{errors.state}</p>
                            )}
                        </div>
                    </div>
                    <button type="submit">Sign Up</button>
                </Form>
            </StyledForm>
        </StyledLoginContainer>
    );
};

const withFormikObj = withFormik({
    mapPropsToValues: ({ username, password, email, city }) => ({
        username: username || "",
        password: password || "",
        email: email || "",
        city: city || ""
    }),
    validationSchema: yup.object().shape({
        username: yup
            .string()
            // .email("Email not valid")
            .required("Username is required"),
        password: yup
            .string()
            // .min(10, "Password must be 10 characters or longer")
            .required("Password is required"),
        // .matches(
        //     /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        //     "Must contain 8 characters, one uppercase, one lowercase, one number and one special case character"
        // )
        // passwordConfirm: yup
        //     .string()
        //     .oneOf([yup.ref("password"), null], `Passwords don't match`)
        //     .required("Password confirmation is required"),
        // city: yup.string().required("City is required"),
        zip_code: yup
            .string()
            .matches(/^[0-9]*$/, "Zip code must be numbers only")
            .required("Zip code is required"),
        state: yup
            .string()
            .max(2, "State must be 2 characters long")
            .min(2, "State must be 2 characters long")
            .required("State is required")
    }),
    handleSubmit: (values, { props, resetForm, setSubmitting, setStatus }) => {
        console.log("submitting!", values);
        props.userSignup(values);
        props.history.push("/login");
        resetForm();
    }
})(SignUpForm);

export default connect(null, { userSignup })(withFormikObj);
