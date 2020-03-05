import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";

import Nav from "./components/Nav/Nav";
import AboutPage from "./pages/AboutPage";
import LoginForm from "./components/LoginForm/LoginForm";
import IssueBoardPage from "./pages/IssueBoardPage";
import SignUpForm from "./components/SignUpForm/SignUpForm";
import PrivateRoute from "./components/PrivateRoute";
import AddNewIssueForm from "./components/AddNewIssue/AddNewIssueForm";

import "./App.css";

// useEffect(() => {
//     localStorage.getItem("token") ? isLoggedIn() : null;
// }, []);

function App() {
    const [user, setUser] = useState({});

    return (
        <div className="App">
            <Route path="/" render={() => <Nav user={user} />} />

            <Switch>
                <PrivateRoute
                    exact
                    path="/issueboard/:id"
                    component={IssueBoardPage}
                />

                <PrivateRoute
                    exact
                    path="issueboard/:id/new"
                    component={AddNewIssueForm}
                />

                <Route exact path="/" component={LoginForm} />
                <Route exact path="/about" component={AboutPage} />

                <Route
                    path="/login"
                    render={props => <LoginForm setUser={setUser} {...props} />}
                />
                <Route path="/signup" component={SignUpForm} />

                <Route component={AboutPage} />

                <Route component={SignUpForm} />
            </Switch>
        </div>
    );
}

export default App;
