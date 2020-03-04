import React from "react";
import * as yup from "yup";
import { withFormik, Field, Form } from "formik";

import { StyledLoginContainer, StyledForm } from "../LoginForm/LoginForm";

const AddNewIssueForm = ({ errors, status, touched, ...props }) => {
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
                            placeholder="type your email"
                        />
                        {touched.title && errors.title && (
                            <p className="error">{errors.title}</p>
                        )}
                    </div>
                    <div className="input-container">
                        <label htmlFor="description">Description:</label>
                        <Field
                            as="textarea"
                            name="description"
                            id="description"
                            placeholder="type your email"
                        />
                        {touched.description && errors.description && (
                            <p className="error">{errors.description}</p>
                        )}
                    </div>
                </Form>
            </StyledForm>
        </StyledLoginContainer>
    );
};

export default withFormik({})(AddNewIssueForm);
