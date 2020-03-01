import React, { useEffect } from "react";
import axios from "axios";

const IssueBoardPage = props => {
    console.log("props", props);

    useEffect(() => {
        axios
            .get(
                `https://co-make-backend.herokuapp.com/api/users/${props.match.params.id}/issues`
            )
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }, []);

    return (
        <div>
            <h1>Issue Board</h1>
        </div>
    );
};

export default IssueBoardPage;
