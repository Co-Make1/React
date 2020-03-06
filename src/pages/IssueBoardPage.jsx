import React, { useEffect, useState } from "react";
import styled from "styled-components";

import IssueCard from "../components/IssueCard/IssueCard";
import AddNewIssue from "../components/AddNewIssue/AddNewIssue";
import { axiosWithAuth } from "../components/utils/axiosWithAuth";
import { connect } from "react-redux";
import { getIssues } from "../components/actions/actionsIndex";

const IssueBoardPage = props => {
    console.log("issue board page props", props);
    console.log("deleteIssues:", props.deleteIssues);

<<<<<<< HEAD
    console.log(props.deleteIssues);

    useEffect(() => {
        props.getIssues();
=======
    console.log("deleteIssues:",props.deleteIssues)

    useEffect(() => {
        if (!props.deleteIssues) {
            axiosWithAuth()
                .get(
                    `https://co-make-backend.herokuapp.com/api/users/${localStorage.getItem(
                        "id"
                    )}/issues`
                )

                .then(res => {
                    setIssues(res.data);

                })
                .catch(err => console.log(err));
        }

        console.log("ALESSANDRA",props.deleteIssues)
>>>>>>> c4df5735ae3014dd483241da5d393ff5b7a76851
    }, [props.deleteIssues]);

    return (
        <>
            <AddNewIssue {...props} />
            <StyledIssueBoard>
                {props.issues.map(issue => {
                    return (
<<<<<<< HEAD
                        <IssueCard {...issue} key={issue.issue.id} {...props} />
=======
                        <IssueCard
                            {...issue}
                            key={issue.issue.id}
                            

                        />
>>>>>>> c4df5735ae3014dd483241da5d393ff5b7a76851
                    );
                })}
            </StyledIssueBoard>
        </>
    );
};

const StyledIssueBoard = styled.div`
    /* height: 100vh; */

    display: grid;
    grid-template-columns: repeat(3, minmax(300px, 400px));
    margin: 3rem 3rem;
    grid-gap: 3rem;
    align-items: stretch;
    justify-content: center;
`;

const mapStateToProps = state => ({
    isFetching: state.isFetching,
    deleteIssues: state.deleteIssues,
    isSuccessful: state.isSuccessful,
    issues: state.issues
});

export default connect(mapStateToProps, { getIssues })(IssueBoardPage);
