import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";

import Nav from "./components/Nav/Nav";
import LoginForm from "./components/LoginForm/LoginForm";
import IssueBoardPage from "./pages/IssueBoardPage";
import SignUpForm from "./components/SignUpForm/SignUpForm";
import PrivateRoute from "./components/PrivateRoute";
import AddNewIssueForm from "./components/AddNewIssue/AddNewIssueForm";

import "./App.css";

function App() {
    return (
        <div className="App">
            <Route path="/" component={Nav} />

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

export default App;
