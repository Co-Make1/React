import React from "react";
import styled from "styled-components";

import { ReactComponent as AddIcon } from "../../assets/add.svg";

const AddNewIssue = props => {
    console.log("add new prop: ", props);
    console.log("history", props.match.url);

    const handleClick = () => {
        props.history.push(`/new`);
    };

    return (
        <StyledAddNewIssue>
            <AddIcon onClick={handleClick} />
            <p>ADD NEW ISSUE</p>
        </StyledAddNewIssue>
    );
};

const StyledAddNewIssue = styled.div`
    display: flex;
    max-width: 1284px;
    /* border: 1px solid black; */
    margin: 0 auto;
    margin-top: 130px;
    align-items: center;

    p {
        margin: 0;
        margin-left: 1rem;
    }

    svg {
        opacity: 0.8;
        cursor: pointer;
        transition: all 400ms cubic-bezier(0.175, 0.885, 0, 1);

        &:hover {
            transform: scale(1.2);
            transition: all 400ms cubic-bezier(0.175, 0.885, 0, 1);
        }

        &:active {
            transform: scale(1);
            transition: all 400ms cubic-bezier(0.175, 0.885, 0, 1);
        }
    }
`;

export default AddNewIssue;
