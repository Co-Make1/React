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
            // localStorage.setItem("user", {
            //     id: response.data.user.id,
            //     token: response.data.user.token,
            //     username: response.data.user.username,
            //     state:  response.data.user.state
            // });
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("id", response.data.user.id);
            localStorage.setItem("username", response.data.user.username);
            localStorage.setItem("state", response.data.user.state);

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
    dispatch({ type: LOGOUT_USER });

    localStorage.removeItem("token");
    localStorage.removeItem("id");

    localStorage.removeItem("username");
    localStorage.removeItem("state");
};

export const loggedIn = () => dispatch => {
    dispatch({ type: LOGGED_IN });
};

export const START_POST_ISSUE = "START_POST_ISSUE";
export const SUCCESS_POST_ISSUE = "SUCCESS_POST_ISSUE";
export const FAILURE_POST_ISSUE = "FAILURE_POST_ISSUE";

export const postIssue = newIssue => dispatch => {
    dispatch({ type: START_POST_ISSUE });
    console.log(newIssue);

    axiosWithAuth()
        .post(`/users/${localStorage.getItem("id")}/issues/`, newIssue)
        .then(res => {
            console.log(res);
            dispatch({ type: SUCCESS_POST_ISSUE, payload: res.data });
        })
        .catch(error => {
            console.log("error in posting data to the api", error.message);
            dispatch({ type: FAILURE_POST_ISSUE, payload: error.message });
        });
};

export const START_DELETE_ISSUE = "START_DELETE_ISSUE";
export const SUCCESS_DELETE_ISSUE = "SUCCESS_DELETE_ISSUE";
export const FAILURE_DELETE_ISSUE = "FAILURE_DELETE_ISSUE";

export const deleteIssue = issue => dispatch => {
    dispatch({ type: START_DELETE_ISSUE });

    axiosWithAuth()
        .delete(`/users/${localStorage.getItem("id")}/issues/${issue.id}`)
        .then(res => {
            console.log(res);
            dispatch({ type: SUCCESS_DELETE_ISSUE, payload: res.data });
        })
        .catch(error => {
            console.log(error);
            dispatch({ type: FAILURE_DELETE_ISSUE, payload: error });
        });
};

export const START_UPDATE_ISSUE = "START_UPDATE_ISSUE";
export const SUCCESS_UPDATE_ISSUE = "SUCCESS_UPDATE_ISSUE";
export const FAILURE_UPDATE_ISSUE = "FAILURE_UPDATE_ISSUE";

export const updateIssue = issue => dispatch => {
    dispatch({ type: START_UPDATE_ISSUE });

    axiosWithAuth()
        .put(`/users/${localStorage.getItem("id")}/issues/${issue.id}`, issue)
        .then(res => {
            console.log("UPDATING RESPONSE", res);
            dispatch({ type: SUCCESS_UPDATE_ISSUE, payload: res.data });
        })
        .catch(error => {
            console.log(error);
            dispatch({ type: FAILURE_UPDATE_ISSUE, payload: error });
        });
};

export const START_GET_ISSUES = "START_GET_ISSUES";
export const SUCESS_GET_ISSUES = "SUCESS_GET_ISSUES";
export const FAILURE_GET_ISSUES = "FAILURE_GET_ISSUES";

export const getIssues = () => dispatch => {
    dispatch({ type: START_GET_ISSUES });

    axiosWithAuth()
        .get(
            `https://co-make-backend.herokuapp.com/api/users/${localStorage.getItem(
                "id"
            )}/issues`
        )
        .then(res => {
            console.log("GET ISSUES RES: ", res);
            dispatch({ type: SUCESS_GET_ISSUES, payload: res.data });
        })
        .catch(error => {
            console.log(error);
            dispatch({ type: FAILURE_GET_ISSUES, payload: error });
        });
};
