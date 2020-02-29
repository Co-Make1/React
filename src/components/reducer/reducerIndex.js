import {
    START_GET_ISSUE,
    SUCCESS_GET_ISSUE,
    FAILURE_GET_ISSUE,

    START_POST_ISSUE,
    SUCCESS_POST_ISSUE,
    FAILURE_POST_ISSUE,

    START_DELETE_ISSUE,
    SUCCESS_DELETE_ISSUE,
    FAILURE_DELETE_ISSUE,

    START_UPDATE_ISSUE,
    SUCCESS_UPDATE_ISSUE,
    FAILURE_UPDATE_ISSUE
} from "../actions/actionsIndex";

const initialState = {
    getIssue: false,
    postIssue: false,
    deleteIssue: false,
    updateIssue: false
};

export const AppReducer = (state = initialState, action) => {
    console.log(state);
    switch (action.type) {
        case START_GET_ISSUE:
            return {
                ...state,
                getIssue: true
            };
        case SUCCESS_GET_ISSUE:
            return {
                ...state,
                getIssue: false
            };

        case FAILURE_GET_ISSUE:
            return {
                ...state,
                getIssue: null
            };

        case START_POST_ISSUE:
            return {
                ...state,
                postIssue: true
            };

        case SUCCESS_POST_ISSUE:
            return {
                ...state,
                postIssue: false
            };

        case FAILURE_POST_ISSUE:
            return {
                ...state,
                postIssue: null
            };

        case START_DELETE_ISSUE:
            return {
                ...state,
                deleteIssue: true
            };

        case SUCCESS_DELETE_ISSUE:
            return {
                ...state,
                deleteIssue: false
            };

        case FAILURE_DELETE_ISSUE:
            return {
                ...state,
                deleteIssue: null
            };

        case START_UPDATE_ISSUE:
            return {
                ...state,
                updateIssue: true
            };

        case SUCCESS_UPDATE_ISSUE:
            return {
                ...state,
                updateIssue: false
            };

        case FAILURE_UPDATE_ISSUE:
            return {
                ...state,
                updateIssue: null
            };

        default:
            return state;
    }
};
