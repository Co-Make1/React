import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";

import Nav from "./components/Nav/Nav";
import LoginForm from "./components/LoginForm/LoginForm";
import IssueBoardPage from "./pages/IssueBoardPage";
import SignUpForm from "./components/SignUpForm/SignUpForm";
import PrivateRoute from "./components/PrivateRoute";
import AddNewIssueForm from "./components/AddNewIssue/AddNewIssueForm";
import { connect } from "react-redux";
import { loggedIn } from "./components/actions/actionsIndex";
import "./App.css";
import Main from "./components/Main";

function App(props) {
    console.log("AppJS props: ", props);
    useEffect(() => {
        if (localStorage.getItem("token")) {
            props.loggedIn();
        }
    }, []);

    return (
        <div className="App">
            <Route path="/" component={Nav} />
            <Route exact path="/" component={Main} />

            <Switch>
                <PrivateRoute
                    exact
                    path="/issueboard/:id"
                    component={IssueBoardPage}
                />
                <PrivateRoute exact path="/new" component={AddNewIssueForm} />

                <Route path="/login" component={LoginForm} />
                <Route path="/signup" component={SignUpForm} />
            </Switch>
        </div>
    );
}

const mapStateToProps = state => ({
    isLoggedIn: state.isLoggedIn
});

export default connect(mapStateToProps, { loggedIn })(App);
