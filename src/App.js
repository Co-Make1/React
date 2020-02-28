import React from "react";
import { Route, Switch } from "react-router-dom";

import Nav from "./components/Nav/Nav";
import AboutPage from "./pages/AboutPage";
import LoginForm from "./components/LoginForm/LoginForm";
import IssueBoardPage from "./pages/IssueBoardPage";
import SignUpForm from "./components/SignUpForm/SignUpForm";

import "./App.css";

function App() {
    return (
        <div className="App">
            <Nav />

            <Switch>
                <Route
                    exact
                    path="/"
                    render={props => <LoginForm {...props} />}
                />
                <Route
                    path="/about"
                    render={props => <AboutPage {...props} />}
                />
                <Route
                    path="/issueboard"
                    render={props => <IssueBoardPage {...props} />}
                />
                <Route
                    path="/login"
                    render={props => <LoginForm {...props} />}
                />
                <Route
                    path="/signup"
                    render={props => <SignUpForm {...props} />}
                />
            </Switch>
        </div>
    );
}

export default App;
