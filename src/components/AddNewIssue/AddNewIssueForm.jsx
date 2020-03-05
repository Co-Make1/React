import React from "react";
import * as yup from "yup";
import { withFormik, Field, Form } from "formik";

import { StyledLoginContainer, StyledForm } from "../LoginForm/LoginForm";

const AddNewIssueForm = ({ errors, status, touched, ...props }) => {
    console.log("add new issue form ", props);

    const handleBackButton = e => {
        e.preventDefault();
        props.history.push(`/issueboard/${localStorage.getItem("id")}`);
    };

    return (
        <StyledLoginContainer>
            <StyledForm>
                <Form>
                    <div className="input-container">
                        <label htmlFor="title">Title:</label>
                        <Field
                            type="text"
                            name="title"
                            id="title"
                            placeholder="type title"
                        />
                        {touched.title && errors.title && (
                            <p className="error">{errors.title}</p>
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

                    <div className="input-container description">
                        <label htmlFor="description">Description:</label>
                        <Field
                            as="textarea"
                            name="description"
                            id="description"
                            placeholder="type your issue"
                        />
                        {touched.description && errors.description && (
                            <p className="error">{errors.description}</p>
                        )}
                    </div>

                    <div className="buttons-container">
                        <button onClick={handleBackButton}>Back</button>
                        <button type="submit">Add New</button>
                    </div>
                </Form>
            </StyledForm>
        </StyledLoginContainer>
    );
};

const withFormikObj = withFormik({
    mapPropsToValues: ({ title, city, zip_code, state, description }) => ({
        title: title || "",
        city: city || "",
        zip_code: zip_code || "",
        state: state || "",
        description: description || ""
    }),
    validationSchema: yup.object().shape({
        title: yup.string().required("Title is required"),
        city: yup.string().required("City is required"),

        zip_code: yup
            .string()
            .matches(/^[0-9]*$/, "Zip code must be numbers only")
            .required("Zip code is required"),
        state: yup
            .string()
            .max(2, "State must be 2 characters long")
            .min(2, "State must be 2 characters long")
            .required("State is required"),
        description: yup
            .string()
            .max(180, "180 characters maximum")
            .required("Description is required")
    }),
    handleSubmit: (values, { props }) => {
        console.log("submitting!", values);

        props.history.push(`/issueboard/${localStorage.getItem("id")}`);
    }
})(AddNewIssueForm);

export default withFormikObj;
