import React from "react";

const EditIssueForm = props => {
    const handleChange = e => {
        props.setEditIssue({
            ...props.editIssue,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div>
            {props.editIssue && (
                <form
                    onSubmit={event => props.handleEdit(event, props.editIssue)}
                >
                    <label htmlFor="issue">Issue:</label>
                    <input
                        type="text"
                        name="issue"
                        id="issue"
                        placeholder="type issue"
                        value={props.editIssue.issue}
                        onChange={event => handleChange(event)}
                    />
                    <label htmlFor="city">City</label>
                    <input
                        type="text"
                        name="city"
                        placeholder="type your city"
                        id="city"
                        value={props.editIssue.city}
                        onChange={event => handleChange(event)}
                    />
                    <label htmlFor="zip code">Zip Code</label>
                    <input
                        type="number"
                        name="zip_code"
                        placeholder="type your zip-code"
                        id="zip_code"
                        value={props.editIssue.zip_code}
                        onChange={event => handleChange(event)}
                    />
                    <label htmlFor="hazard_level">Hazard_Level</label>
                    <input
                        type="text"
                        name="hazard_level"
                        placeholder="type the hazard_level"
                        id="hazard_level"
                        value={props.editIssue.hazard_level}
                        onChange={event => handleChange(event)}
                    />
                    <label htmlFor="description">Description:</label>
                    <input
                        as="textarea"
                        name="issue_description"
                        id="issue_description"
                        placeholder="type your issue"
                        value={props.editIssue.issue_description}
                        onChange={event => handleChange(event)}
                    />
                    <button>Edit Issue</button>
                    <button onClick={props.cancelEdit}>Cancel</button>
                </form>
            )}
        </div>
    );
};

export default EditIssueForm;
