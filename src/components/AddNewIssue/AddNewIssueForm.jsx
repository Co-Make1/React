import React from "react";

const AddNewIssueForm = () => {
    return (
        <div>
            <h1>Add New Issue Form</h1>
        </div>
    );
};

<<<<<<< Updated upstream
export default AddNewIssueForm;
=======
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
    handleSubmit: (values, { props, resetForm, setSubmitting, setStatus }) => {
        console.log("submitting!", values);

        props.history.push(`/issueboard/${localStorage.getItem("id")}`);
    }
})(AddNewIssueForm);

export default withFormikObj;
>>>>>>> Stashed changes
