import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="bg-secondary">
            <Link to={"/"} className="m-2 btn btn-primary">
                Pizza
            </Link>
            <Link to={"/login"} className="m-2 btn btn-primary">
                Login/Register
            </Link>
        </div>
    );
};

export default Navbar;
