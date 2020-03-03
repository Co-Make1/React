import {

    START_USER_LOGIN,
    SUCCESS_USER_LOGIN,
    FAILURE_USER_LOGIN,

    START_USER_REGISTER,
    SUCCESS_USER_REGISTER,
    FAILURE_USER_REGISTER,

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
    isLoggedIn: false,
    isFetching: false,
    error: '',
   
    // getIssue: false,
    // postIssue: false,
    // deleteIssue: false,
    // updateIssue: false
};

export const AppReducer = (state = initialState, action) => {
    console.log(state);
    switch (action.type) {
        case START_USER_LOGIN: 
        return {
            ...state,
            isFetching: true,
            isLoggedIn:false,
            error: null

        }
        case SUCCESS_USER_LOGIN: 
        return {
            ...state,
            isFetching: false,
            isLoggedIn:true,
            user:action.payload,
            error: null
        }

        case FAILURE_USER_LOGIN:
            return {
                ...state,
                isFetching:false,
                isLoggedIn: false,
                error: action.payload
            }

            case START_USER_REGISTER: 
            return {
                ...state,
                isFetching:true,
                error: null
            }

            case SUCCESS_USER_REGISTER:
            return {
                ...state,
                isFetching: false,
                user: action.payload,
                error: null
            }
            
            case FAILURE_USER_REGISTER: 
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }

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
