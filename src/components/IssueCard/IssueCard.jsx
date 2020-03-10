import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { deleteIssue, updateIssue } from "../actions/actionsIndex";
import { connect } from "react-redux";
import { ReactComponent as UpVoteIcon } from "../../assets/upvote.svg";
import { ReactComponent as UpVotedIcon } from "../../assets/upvoted.svg";
import { ReactComponent as EditIcon } from "../../assets/edit.svg";
import { ReactComponent as DeleteIcon } from "../../assets/delete.svg";
import EditIssueForm from "../EditIssueForm/EditIssueForm";

const IssueCard = props => {
    console.log("props on issuecard: ", props);
    const [upVotes, setUpVotes] = useState(props.total_upvotes);
    const [upVoted, setUpVoted] = useState(false);
    const [editing, setEditing] = useState(false);
    const [editIssue, setEditIssue] = useState({
        id: props.issue.id,
        user_id: localStorage.getItem("id")
    });

    useEffect(() => {
        const wasUpvoted = props.upvotes.filter(
            element => element.user_id.toString() === localStorage.getItem("id")
        );
        console.log("was upvoted: ", wasUpvoted.length);
        if (wasUpvoted.length > 0) {
            setUpVoted(true);
        }
    }, []);

    console.log("TYPEOF UPVOTES", typeof upVotes);
    console.log("UPVOTES", upVotes);

    const toggleUpVote = () => {
        upVoted ? setUpVotes(upVotes - 1) : setUpVotes(upVotes + 1);
        setUpVoted(!upVoted);
    };

    const handleDelete = e => {
        e.preventDefault();
        props.deleteIssue(props.issue);
    };

    const handleEdit = (e, issue) => {
        e.preventDefault();
        props.updateIssue(issue);
        setEditing(false);
    };

    const editingIssue = (e, issue) => {
        e.preventDefault();
        setEditing(true);
        setEditIssue(issue);
    };

    const cancelEdit = () => {
        setEditing(false);
    };

    return (
        <StyledCard>
            {props.issue.photo ? (
                <img src={props.issue.photo} alt={props.issue.issue} />
            ) : (
                <img src="/photo-template.PNG" alt="template" />
            )}
            <div className="text-container">
                <div className="top-text">
                    <h4>{props.issue.issue}</h4>
                    <p className="hazard">{props.issue.hazard_level}</p>
                </div>
                <div className="location">
                    <strong>Location: </strong>
                    <p>{`${props.issue.city}, ${props.issue.state}`}</p>
                </div>
                <div className="issue-description">
                    <strong>Description:</strong>
                    <p>{props.issue.issue_description}</p>
                </div>
                <div className="upvotes">
                    <p>{upVotes}</p>
                    {upVoted ? (
                        <UpVotedIcon onClick={toggleUpVote} />
                    ) : (
                        <UpVoteIcon onClick={toggleUpVote} />
                    )}
                </div>
                {editing && (
                    <DeleteIcon
                        onClick={handleDelete}
                        className="icons delete"
                    />
                )}

                {editing ? null : (
                    <EditIcon
                        onClick={e => editingIssue(e, editIssue)}
                        className="icons edit"
                    />
                )}

                {editing && (
                    <div>
                        <EditIssueForm
                            editIssue={editIssue}
                            setEditIssue={setEditIssue}
                            handleEdit={handleEdit}
                            cancelEdit={cancelEdit}
                        />
                    </div>
                )}
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
            align-items: baseline;
            h4 {
                font-family: "Permanent Marker";
                max-width: 65%;
            }

            .hazard {
                color: white;
                background: #333;
                padding: 0.2rem 0.9rem;
                font-size: 0.9rem;
                border-radius: 5px;
            }
        }

        .location {
            display: flex;
            justify-content: space-between;
            margin-top: 1rem;
        }

        .issue-description {
            margin-top: 0rem;

            p,
            h4 {
                margin: 0;
            }

            p {
                margin-top: 0rem;
                margin-bottom: 2rem;
            }
        }

        .upvotes {
            display: flex;
            justify-content: flex-end;
            bottom: 1rem;
            right: 2rem;
            position: absolute;

            p {
                margin-right: 1rem;
            }
        }

        .icons {
            position: absolute;
        }

        .edit {
            bottom: 1rem;
            left: 2rem;
        }
        .delete {
            bottom: 1rem;
            left: 2rem;
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

const mapStateToProps = state => ({
    deleteIssues: state.deleteIssues,
    isUpdated: state.isUpdated
});

export default connect(mapStateToProps, { deleteIssue, updateIssue })(
    IssueCard
);
