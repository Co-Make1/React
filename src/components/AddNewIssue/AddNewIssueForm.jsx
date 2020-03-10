import React, { useEffect } from "react";
import * as yup from "yup";
import { withFormik, Field, Form } from "formik";
import { connect } from "react-redux";
import { postIssue } from "../actions/actionsIndex";
import { StyledLoginContainer, StyledForm } from "../LoginForm/LoginForm";

const AddNewIssueForm = ({ errors, status, touched, ...props }) => {
    console.log("add new issue form ", props);

    const handleBackButton = e => {
        e.preventDefault();
        props.history.push(`/issueboard/${localStorage.getItem("id")}`);
    };

    useEffect(() => {
        if (props.isPosted) {
            props.history.push(`/issueboard/${localStorage.getItem("id")}`);
        }
    }, [props.isPosted]);

    return (
        <StyledLoginContainer>
            <StyledForm>
                <Form>
                    <div className="input-container">
                        <label htmlFor="issue">Issue:</label>
                        <Field
                            type="text"
                            name="issue"
                            id="issue"
                            placeholder="type issue"
                        />
                        {touched.issue && errors.issue && (
                            <p className="error">{errors.issue}</p>
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
                    <div className="input-container">
                        <label htmlFor="hazard_level">Hazard_Level</label>
                        <Field
                            type="text"
                            name="hazard_level"
                            placeholder="type the hazard_level"
                            id="hazard_level"
                        />
                        {touched.hazard_level && errors.hazard_level && (
                            <p className="error">{errors.hazard_level}</p>
                        )}
                    </div>

                    <div className="input-container description">
                        <label htmlFor="description">Description:</label>
                        <Field
                            as="textarea"
                            name="issue_description"
                            id="issue_description"
                            placeholder="type your issue"
                        />
                        {touched.issue_description &&
                            errors.issue_description && (
                                <p className="error">
                                    {errors.issue_description}
                                </p>
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
    mapPropsToValues: ({
        issue,
        city,
        zip_code,
        state,
        hazard_level,
        issue_description
    }) => ({
        issue: issue || "",
        city: city || "",
        zip_code: zip_code || "",
        state: state || "",
        hazard_level: hazard_level || "",
        issue_description: issue_description || "",
        user_id: parseInt(localStorage.getItem("id"))
    }),
    validationSchema: yup.object().shape({
        issue: yup.string().required("Issue is required"),
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
        hazard_level: yup.string().required("hazard_level is required"),
        issue_description: yup
            .string()
            .max(180, "180 characters maximum")
            .required("Description is required")
    }),
    handleSubmit: (values, { props }) => {
        console.log("submitting!", values);
        props.postIssue(values);
        console.log(`IS FETCHING STATE!`, props.isFetching);
    }
})(AddNewIssueForm);

const mapStateToProps = state => ({
    isFetching: state.isFetching,
    isPosted: state.isPosted
});

export default connect(mapStateToProps, { postIssue })(withFormikObj);
