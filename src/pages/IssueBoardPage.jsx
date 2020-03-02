import React, { useEffect } from "react";
import axios from "axios";
import IssueCard from "../components/IssueCard/IssueCard";
import styled from "styled-components";

const IssueBoardPage = props => {
    console.log("props", props);

    const DUMMY_ISSUES = [
        {
            id: 1,
            issue: "Pothole",
            issue_description:
                "I'm an issue description I'm an issue description I'm an issue description I'm an issue description I'm an issue description I'm an issue description I'm an issue description",
            photo:
                "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
            hazard_level: "Severe Hazard",
            city: "Chicago",
            state: "Illinois",
            zip_code: 60649,
            upvotes: 364235,
            user_id: 1,
            username: "testUser",
            created_at: "2020-02-28 02:33:46"
        },
        {
            id: 2,
            issue: "Car Crash",
            issue_description: "I'm an issue description",
            photo:
                "https://images.unsplash.com/photo-1543393716-375f47996a77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
            hazard_level: "Low Hazard",
            city: "Chicago",
            state: "Illinois",
            zip_code: 60619,
            upvotes: 3,
            user_id: 1,
            username: "testUser",
            created_at: "2020-02-28 02:33:46"
        },
        {
            id: 2,
            issue: "Car Crash",
            issue_description: "I'm an issue description",
            photo:
                "https://images.unsplash.com/photo-1543393716-375f47996a77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
            hazard_level: "Low Hazard",
            city: "Chicago",
            state: "Illinois",
            zip_code: 60619,
            upvotes: 3,
            user_id: 1,
            username: "testUser",
            created_at: "2020-02-28 02:33:46"
        },
        {
            id: 2,
            issue: "Car Crash",
            issue_description: "I'm an issue description",
            photo:
                "https://images.unsplash.com/photo-1543393716-375f47996a77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
            hazard_level: "Low Hazard",
            city: "Chicago",
            state: "Illinois",
            zip_code: 60619,
            upvotes: 3,
            user_id: 1,
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
        <StyledIssueBoard>
            {DUMMY_ISSUES.map(issue => {
                return <IssueCard {...issue} key={issue.id} />;
            })}
        </StyledIssueBoard>
    );
};

const StyledIssueBoard = styled.div`
    /* height: 100vh; */
    padding-top: 57px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin: 3rem 10%;
    grid-gap: 3rem;
    align-items: center;
    justify-items: center;
`;

export default IssueBoardPage;
