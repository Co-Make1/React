import React from "react";
import styled from "styled-components";

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
                <StyledEditForm
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
                    <div className="zip-hazard-container">
                        <div className="zip-container">
                            <label htmlFor="zip code">Zip Code</label>
                            <input
                                type="text"
                                name="zip_code"
                                placeholder="type your zip-code"
                                id="zip_code"
                                value={props.editIssue.zip_code}
                                onChange={event => handleChange(event)}
                            />
                        </div>
                        <div className="hazard-container">
                            <label htmlFor="hazard_level">Hazard_Level</label>
                            <select
                                id="hazard_level"
                                onChange={event => handleChange(event)}
                                name="hazard_level"
                            >
                                <option value="1">1 - Severe</option>
                                <option value="2">2 - Moderate</option>
                                <option value="3">3 - Low</option>
                            </select>
                        </div>
                    </div>
                    {/* <input
                        type="text"
                        name="hazard_level"
                        placeholder="type the hazard_level"
                        id="hazard_level"
                        value={props.editIssue.hazard_level}
                        onChange={event => handleChange(event)}
                    /> */}
                    <label htmlFor="description">Description:</label>
                    <input
                        as="textarea"
                        name="issue_description"
                        id="issue_description"
                        placeholder="type your issue"
                        value={props.editIssue.issue_description}
                        onChange={event => handleChange(event)}
                    />
                    <div className="button-container">
                        <button onClick={props.cancelEdit} className="cancel">
                            Cancel
                        </button>
                        <button type="submit" className="edit">
                            Edit Issue
                        </button>
                    </div>
                </StyledEditForm>
            )}
        </div>
    );
};

const StyledEditForm = styled.form`
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;

    input,
    select {
        padding: 0.5rem;
        border: none;
        border-bottom: 1px solid #333;
        background-color: #f8f8f8;
        font-family: "Open Sans";
    }

    select {
        margin-bottom: 1.15rem;
        min-width: 126px;
    }

    .button-container {
        width: 100%;
        margin-bottom: 1rem;
        display: flex;
        justify-content: space-between;
    }

    .zip-hazard-container {
        display: flex;
        justify-content: space-between;
    }

    .zip-container,
    .hazard-container {
        display: flex;
        flex-direction: column;
    }

    .cancel,
    .edit {
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
            background-color: #217aff;
            border: none;
        }

        &:active {
            transform: scale(1);
            transition: all 400ms cubic-bezier(0.175, 0.885, 0, 1);
        }
    }

    .cancel {
        background-color: rgba(235, 87, 87, 0.6);
        &:hover {
            background-color: rgba(235, 87, 87, 1);
            border: none;
        }
    }

    .edit {
        background-color: #2fde9f;
        &:hover {
            background-color: #2fde9f;
        }
    }
`;

export default EditIssueForm;
