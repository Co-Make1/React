import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...props }) => {
    return (
        <Route
            {...props}
            render={props => {
                if (localStorage.getItem("token")) {
                    return <Component {...props} />;
                } else {
                    return <Redirect to="/login" {...props} />;
                }
            }}
        />
    );
};

export default PrivateRoute;
