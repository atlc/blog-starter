import React, { useState } from "react";
import { POST, TOKEN_KEY } from "../services/fetcher";
import Swal from "sweetalert2";

interface LoginResponse {
    message: string;
    token: string;
    id?: number;
}

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [isLogin, setIsLogin] = useState(true);

    const handleButtonClick = () => {
        const url = isLogin ? `/auth/login` : "/auth/register";
        POST<LoginResponse>(url, { email, password, name }).then((data) => {
            localStorage.setItem(TOKEN_KEY, data.token);
            Swal.fire({
                title: "Nice!",
                icon: "success",
                text: data.message,
                timer: 6000,
                toast: true,
                position: "top-right",
            });
        });
    };

    return (
        <div className="row justify-content-center">
            <div className="my-5 col-12 col-md-6">
                <div className="card shadow-lg p-3">
                    <div className="card-title">
                        <h1>
                            Currently {isLogin ? "logging in" : "registering"}.{" "}
                            <span className="m-2 btn btn-primary" onClick={() => setIsLogin(!isLogin)}>
                                Switch to {isLogin ? "register" : "login"}?
                            </span>
                        </h1>
                    </div>
                    <div className="card-body">
                        {!isLogin && (
                            <>
                                <label>Name:</label>
                                <input
                                    className="form-control"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </>
                        )}
                        <label>Email:</label>
                        <input className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <label>Password:</label>
                        <input
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <div className="card-footer">
                            <button className="btn btn-primary my-2" onClick={handleButtonClick}>
                                {isLogin ? "Login" : "Register"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
