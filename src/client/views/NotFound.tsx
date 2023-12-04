import React from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";

const NotFound = () => {
    const loc = useLocation();
    const nav = useNavigate();

    return (
        <div className="alert alert-danger p-5 shadow-lg">
            <h1>404, {loc.pathname} not found, idiot</h1>
            <button onClick={() => nav(-1)} className="btn btn-primary m-2">
                Go Back
            </button>
        </div>
    );
};

export default NotFound;
