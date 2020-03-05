import { axiosWithAuth } from "../utils/axiosWithAuth";

export const START_USER_LOGIN = "START_USER_LOGIN";
export const SUCCESS_USER_LOGIN = "SUCCESS_USER_LOGIN";
export const FAILURE_USER_LOGIN = "FAILURE_USER_LOGIN";

export const userLogin = user => dispatch => {
    dispatch({ type: START_USER_LOGIN });

    axiosWithAuth()
        .post("/auth/login", user)
        .then(response => {
            dispatch({ type: SUCCESS_USER_LOGIN, payload: response.data });
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("id", response.data.user.id);
            localStorage.setItem("username", response.data.user.username);
            console.log("response: ", response);
        })
        .catch(err => {
            console.log(err);
            localStorage.removeItem("token");
            dispatch({ type: FAILURE_USER_LOGIN, payload: err });
        });
};

export const START_USER_REGISTER = "START_USER_REGISTER";
export const SUCCESS_USER_REGISTER = "SUCCESS_USER_REGISTER";
export const FAILURE_USER_REGISTER = "FAILURE_USER_REGISTER";

export const userSignup = values => dispatch => {
    dispatch({ type: START_USER_REGISTER });

    axiosWithAuth()
        .post("/auth/register", values)
        .then(response => {
            dispatch({ type: SUCCESS_USER_REGISTER, payload: response.data });
            console.log("response: ", response);
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: FAILURE_USER_REGISTER, payload: err });
        });
};

export const LOGOUT_USER = "LOGOUT_USER";
export const LOGGED_IN = "LOGGED_IN";

export const logOut = () => dispatch => {
    dispatch({ type:LOGOUT_USER })

    localStorage.removeItem("token");
    localStorage.removeItem("id");
    localStorage.removeItem("username");
}

export const loggedIn = () => dispatch => {
    dispatch({ type:LOGGED_IN})
}

export const START_GET_ISSUE = "";
export const SUCCESS_GET_ISSUE = "";
export const FAILURE_GET_ISSUE = "";

export const START_POST_ISSUE = "";
export const SUCCESS_POST_ISSUE = "";
export const FAILURE_POST_ISSUE = "";

export const START_DELETE_ISSUE = "";
export const SUCCESS_DELETE_ISSUE = "";
export const FAILURE_DELETE_ISSUE = "";

export const START_UPDATE_ISSUE = "";
export const SUCCESS_UPDATE_ISSUE = "";
export const FAILURE_UPDATE_ISSUE = "";

export const getIssue = () => dispatch => {
    dispatch({ type: START_GET_ISSUE });

    axiosWithAuth()
        .get("")
        .then(res => {
            console.log(res);
            dispatch({ type: SUCCESS_GET_ISSUE, payload: res.data });
        })
        .catch(error => {
            console.log("error fetching data from api", error);
            dispatch({ type: FAILURE_GET_ISSUE, payload: error });
        });
};

export const postIssue = () => dispatch => {
    dispatch({ type: START_POST_ISSUE });

    axiosWithAuth()
        .get("")
        .then(res => {
            console.log(res);
            dispatch({ type: SUCCESS_POST_ISSUE, payload: res.data });
        })
        .catch(error => {
            console.log("error in posting data to the api", error);
            dispatch({ type: FAILURE_POST_ISSUE, payload: error });
        });
};

export const deleteIssue = () => dispatch => {
    dispatch({ type: START_DELETE_ISSUE });

    axiosWithAuth()
        .get("")
        .then(res => {
            console.log(res);
            dispatch({ type: SUCCESS_DELETE_ISSUE, payload: res.data });
        })
        .catch(error => {
            console.log(error);
            dispatch({ type: FAILURE_DELETE_ISSUE, payload: error });
        });
};

export const updateIssue = () => dispatch => {
    dispatch({ type: START_UPDATE_ISSUE });

    axiosWithAuth()
        .get("")
        .then(res => {
            console.log(res);
            dispatch({ type: SUCCESS_UPDATE_ISSUE, payload: res.data });
        })
        .catch(error => {
            console.log(error);
            dispatch({ type: FAILURE_UPDATE_ISSUE, payload: error });
        });
};
