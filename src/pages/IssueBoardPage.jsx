import React, { useEffect, useState } from "react";
import styled from "styled-components";

import IssueCard from "../components/IssueCard/IssueCard";
import AddNewIssue from "../components/AddNewIssue/AddNewIssue";
import { axiosWithAuth } from "../components/utils/axiosWithAuth";
import { connect } from "react-redux";

const IssueBoardPage = props => {
    console.log("issue board page props", props);
    const [issues, setIssues] = useState([]);

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
    }, [props.deleteIssues]);

    console.log(issues);

    return (
        <>
            <AddNewIssue {...props} />
            <StyledIssueBoard>
                {issues.map(issue => {
                    return (
                        <IssueCard
                            {...issue}
                            key={issue.issue.id}
                            

                        />
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
    deleteIssues: state.deleteIssues
})

export default connect(mapStateToProps)(IssueBoardPage);
