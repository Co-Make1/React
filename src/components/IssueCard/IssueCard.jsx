import React from "react";
import styled from "styled-components";
import { deleteIssue } from "../actions/actionsIndex";
import { connect } from "react-redux";
import { ReactComponent as UpVoteIcon } from "../../assets/upvote.svg";


const IssueCard = props => {
    console.log("props on issuecard: ", props);

    const handleDelete = e => {
        e.preventDefault();
        props.deleteIssue(props.issue);
    };

    return (
        <StyledCard>
            <img src={props.issue.photo} alt={props.issue.issue} />
            <div className="text-container">
                <div className="top-text">
                    <h4>{props.issue.issue}</h4>
                    <h5>{props.issue.hazard_level}</h5>
                </div>
                <div className="location">
                    <h5>Location: </h5>
                    <p>{`${props.issue.city}, ${props.issue.state}`}</p>
                </div>
                <div className="issue-description">
                    <h5>Description:</h5>
                    <p>{props.issue.issue_description}</p>
                </div>
                <div className="upvotes">
                    <p>{props.total_upvotes}</p>
                    <UpVoteIcon />
                </div>
                <button onClick={handleDelete}>Delete</button>
            </div>
        </StyledCard>
    );
};

const StyledCard = styled.div`
    border: 1px solid rgba(0, 0, 0, 0.05);
    border-radius: 20px;
    box-shadow: 0px 13px 10px -7px rgba(0, 0, 0, 0.1);
    transition: all 400ms cubic-bezier(0.175, 0.885, 0, 1);
    width: 100%;
    position: relative;
    /* transition: all 300ms cubic-bezier(0.68, -0.55, 0.27, 01.55); */
    cursor: pointer;

    img {
        border-radius: 20px 20px 0 0;
        width: 100%;
    }
    .text-container {
        padding: 2rem;
        padding-top: 1rem;

        p {
            margin: 0;
            color: rgba(0, 0, 0, 0.6);
        }
        h4,
        h5 {
            margin: 0;
        }

        .top-text {
            display: flex;
            justify-content: space-between;
            h4 {
                font-family: "Permanent Marker";
            }

            h5 {
                color: white;
                background-color: #333;
                padding: 0.2rem 0.7rem;
            }
        }

        .location {
            display: flex;
            justify-content: space-between;
            margin-top: 2rem;
        }

        .issue-description {
            margin-top: 0.5rem;

            p,
            h5 {
                margin: 0;
            }

            p {
                margin-top: 0.5rem;
                margin-bottom: 2rem;
            }
        }

        .upvotes {
            display: flex;
            justify-content: flex-end;
            bottom: 1rem;
            right: 1.5rem;
            position: absolute;

            p {
                margin-right: 1rem;
            }
        }
    }

    &:hover {
        /* transform: translateY(-5px); */
        transform: scale(1.06, 1.06);
        transition: all 400ms cubic-bezier(0.175, 0.885, 0, 1);
        /* transition: all 300ms cubic-bezier(0.68, -0.55, 0.27, 01.55); */
        box-shadow: 0px 30px 18px -8px rgba(0, 0, 0, 0.1);
    }
`;

// const mapStateToProps = state => ({
//     deleteIssues: state.deleteIssues
// });

export default connect(null, { deleteIssue })(IssueCard);


// export default IssueCard;
