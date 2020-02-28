import React from "react";
import { Route, Switch } from "react-router-dom";

import Nav from "./components/Nav/Nav";
import AboutPage from "./pages/AboutPage";
import LoginForm from "./components/LoginForm/LoginForm";
import IssueBoardPage from "./pages/IssueBoardPage";
import SignUpForm from "./components/SignUpForm/SignUpForm";
import PrivateRoute from "./components/PrivateRoute";

import "./App.css";

function App() {
    return (
        <div className="App">
            <Nav />

            <Switch>

                <PrivateRoute exact
                    path="/issueboard"
                    component={IssueBoardPage}
                />
                <Route
                    exact
                    path="/"
                    component={LoginForm}
                />
                <Route
                    path="/about"
                    component={AboutPage}
                />
                
                <Route
                    path="/login"
                    component={LoginForm }
                />
                <Route
                    path="/signup"
                    component={SignUpForm}
                />
                <Route 
                    component= {LoginForm} />

                <Route 
                    component= {AboutPage} />

                <Route 
                    component= {SignUpForm} />

            </Switch>
        </div>
    );
}

export default App;
