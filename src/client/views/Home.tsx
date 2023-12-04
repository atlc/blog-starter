import React from "react";
import { POST } from "../services/fetcher";
import Swal from "sweetalert2";

const Home = () => {
    const handleCreateBlog = () => {
        POST("/api/blogs", { title: "lol", content: "lol" }).then((data) => {
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
        <div className="justify-content-center row">
            <h1>Create a blog!</h1>
            <button className="btn btn-primary" onClick={handleCreateBlog}>
                Create
            </button>
        </div>
    );
};

export default Home;
