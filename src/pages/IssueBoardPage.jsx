import React, { useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

import IssueCard from "../components/IssueCard/IssueCard";
import AddNewIssue from "../components/AddNewIssue/AddNewIssue";

const IssueBoardPage = props => {
    console.log("issue board page props", props);

    const DUMMY_ISSUES = [
        {
            id: 1,
            issue: "Pothole",
            issue_description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis sem non tortor vestibulum suscipit. Nunc eget tellus porttitor, elementum felis id, blandit nunc. Integer sit amet auctor elit. Nunc quis neque porta, ultricies eros id, lacinia leo. Nullam ipsum justo, blandit ut pharetra ac, lobortis ut enim. Pellentesque nec nisi purus",
            photo:
                "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
            hazard_level: "Severe Hazard",
            city: "Chicago",
            state: "Illinois",
            zip_code: 60649,
            upvotes: 3645,
            user_id: 1,
            username: "testUser",
            created_at: "2020-02-28 02:33:46"
        },
        {
            id: 2,
            issue: "Car Crash",
            issue_description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis sem non tortor vestibulum suscipit. Nunc eget tellus",
            photo:
                "https://images.unsplash.com/photo-1543393716-375f47996a77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
            hazard_level: "Low Hazard",
            city: "Chicago",
            state: "Illinois",
            zip_code: 60619,
            upvotes: 345,
            user_id: 1,
            username: "testUser",
            created_at: "2020-02-28 02:33:46"
        },
        {
            id: 3,
            issue: "Car Crash",
            issue_description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis sem non tortor vestibulum suscipit. Nunc eget tellus porttitor",
            photo:
                "https://images.unsplash.com/photo-1543393716-375f47996a77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
            hazard_level: "Low Hazard",
            city: "Chicago",
            state: "Illinois",
            zip_code: 60619,
            upvotes: 236,
            user_id: 1,
            username: "testUser",
            created_at: "2020-02-28 02:33:46"
        },
        {
            id: 4,
            issue: "Car Crash",
            issue_description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis",
            photo:
                "https://images.unsplash.com/photo-1543393716-375f47996a77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
            hazard_level: "Low Hazard",
            city: "Chicago",
            state: "Illinois",
            zip_code: 60619,
            upvotes: 3,
            user_id: 15,
            username: "testUser",
            created_at: "2020-02-28 02:33:46"
        }
    ];

    useEffect(() => {
        // axios
        //     .get(
        //         `https://co-make-backend.herokuapp.com/api/users/${props.match.params.id}/issues`
        //     )
        //     .then(res => console.log(res))
        //     .catch(err => console.log(err));
    }, []);

    return (
        <>
            <AddNewIssue {...props} />
            <StyledIssueBoard>
                {DUMMY_ISSUES.map(issue => {
                    return <IssueCard {...issue} key={issue.id} />;
                })}
            </StyledIssueBoard>
        </>
    );
};

const StyledIssueBoard = styled.div`
    /* height: 100vh; */

    display: grid;
    grid-template-columns: repeat(3, minmax(300px, 450px));
    margin: 3rem auto;
    grid-gap: 3rem;
    align-items: stretch;
    justify-content: center;
`;

export default IssueBoardPage;
