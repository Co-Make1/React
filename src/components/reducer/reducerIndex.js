import {
    START_USER_LOGIN,
    SUCCESS_USER_LOGIN,
    FAILURE_USER_LOGIN,
    START_USER_REGISTER,
    SUCCESS_USER_REGISTER,
    FAILURE_USER_REGISTER,
    LOGOUT_USER,
    LOGGED_IN,
    START_POST_ISSUE,
    SUCCESS_POST_ISSUE,
    FAILURE_POST_ISSUE,
    START_DELETE_ISSUE,
    SUCCESS_DELETE_ISSUE,
    FAILURE_DELETE_ISSUE,
    START_UPDATE_ISSUE,
    SUCCESS_UPDATE_ISSUE,
    FAILURE_UPDATE_ISSUE,
} from "../actions/actionsIndex";

const initialState = {
    isLoggedIn: false,
    isFetching: false,
    isPosted: false,
    error: "",
    deleteIssues: false
    // updateIssue: false
};

export const AppReducer = (state = initialState, action) => {
    console.log(state);
    switch (action.type) {
        case START_USER_LOGIN:
            return {
                ...state,
                isFetching: true,
                isLoggedIn: false,
                error: null
            };
        case SUCCESS_USER_LOGIN:
            return {
                ...state,
                isFetching: false,
                isLoggedIn: true,
                user: action.payload,
                error: null
            };

        case FAILURE_USER_LOGIN:
            return {
                ...state,
                isFetching: false,
                isLoggedIn: false,
                error: action.payload
            };

        case START_USER_REGISTER:
            return {
                ...state,
                isFetching: true,
                error: null
            };

        case SUCCESS_USER_REGISTER:
            return {
                ...state,
                isFetching: false,
                user: action.payload,
                error: null
            };

        case FAILURE_USER_REGISTER:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };

        case LOGOUT_USER:
            return {
                ...state,
                isLoggedIn: false
            };

        case LOGGED_IN:
            return {
                ...state,
                isLoggedIn: true
            };


        case START_POST_ISSUE:
            return {
                ...state,
                isFetching: true,
                isPosted: false,
                
            };

        case SUCCESS_POST_ISSUE:
            return {
                ...state,
                isFetching: false,
                isPosted: true,
                newIssue: action.payload
                
            };

        case FAILURE_POST_ISSUE:
            return {
                ...state,
                isFetching: false,
                isPosted:false,
                error: action.payload
            };

        case START_DELETE_ISSUE:
            return {
                ...state,
                isFetching: true,
                deleteIssues: false
            };

        case SUCCESS_DELETE_ISSUE:
            return {
                ...state,
                isFetching:false,
                deleteIssues:true
            };

        case FAILURE_DELETE_ISSUE:
            return {
                ...state,
                isFetching:false,
                deleteIssues:false,
                error: action.payload
            };



        case START_UPDATE_ISSUE:
            return {
                ...state,
                isFetching:true,
                updateIssue: false
            };

        case SUCCESS_UPDATE_ISSUE:
            return {
                ...state,
                isFetching:false,
                updateIssue: true,
                issue: action.payload
            };

        case FAILURE_UPDATE_ISSUE:
            return {
                ...state,
                isFetching:false,
                updateIssue: false,
                error: action.payload
            };

        default:
            return state;
    }
};
