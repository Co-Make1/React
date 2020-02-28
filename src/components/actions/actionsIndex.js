import axiosWithAuth from "../utils/axiosWithAuth";

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
export const SUCCESS_UPDATE_ISSUE = '';
export const FAILURE_UPDATE_ISSUE = ""


export const 

export const getIssue = () => dispatch => {
    dispatch({type:START_GET_ISSUE})

    axiosWithAuth()
    .get('')
    .then(res => {
        console.log(res);
        dispatch({type: SUCCESS_GET_ISSUE, payload: res.data})
    })
    .catch ( error => {
        console.log("error fetching data from api", error)
        dispatch({type:FAILURE_GET_ISSUE, payload:err})
    })

    
}

export const postIssue = () => dispatch => {
    dispatch({type:START_POST_ISSUE})

    axiosWithAuth()
    .get('')
    .then(res => {
        console.log(res);
        dispatch({type: SUCCESS_POST_ISSUE, payload: res.data})
    })
    .catch ( error => {
        console.log("error in posting data to the api", error)
        dispatch({type:FAILURE_POST_ISSUE, payload:err})
    })


    
}

export const deleteIssue = () => dispatch => {

    dispatch({type:START_DELETE_ISSUE})

    axiosWithAuth()
    .get('')
    .then(res => {
        console.log(res);
        dispatch({type: SUCCESS_DELETE_ISSUE, payload: res.data})
    })
    .catch ( error => {
        console.log(error)
        dispatch({type:FAILURE_DELETE_ISSUE, payload:err})
    })


    
}

export const updateIssue = () => dispatch => {
    dispatch({type:START_UPDATE_ISSUE})

    axiosWithAuth()
    .get('')
    .then(res => {
        console.log(res);
        dispatch({type: SUCCESS_UPDATE_ISSUE, payload: res.data})
    })
    .catch ( error => {
        console.log(error)
        dispatch({type:FAILURE_UPDATE_ISSUE, payload:err})
    })



    
}