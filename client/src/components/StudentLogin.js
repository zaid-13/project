import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export function StudentLogin() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({});

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
        console.log(formData);
    }

    function handleLogin(e) {
        e.preventDefault();
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var data = JSON.parse(this.responseText || '{}')
                console.log({ data });
            }
        };
        xhttp.open("POST", "http://localhost:3000/api/loginStudent", true);
        xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.send(JSON.stringify(formData));

    }

    function handleStudentLogin(e) {
        e.preventDefault();
        navigate("/adminLogin", { replace: true });
    }

    return (
        <div className="container p-5 my-5">
            <h1>Student Login</h1>
            <form className="border p-5">
                <div className="form-group">
                    <label htmlFor="userName">User Name</label>
                    <input name="userName" type="text" className="form-control" id="userName" placeholder="Enter your first name" onChange={handleChange} required />
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="userPassword">Password</label>
                    <input name="password" type="password" className="form-control" id="userPassword" placeholder="Your password is your ID number" onChange={handleChange} required />
                </div>
                <button className="btn btn-primary mt-3" onClick={handleLogin}>Login</button>
                <button className="btn btn-secondary mt-3 mx-4" onClick={handleStudentLogin}>Enter as an Admin</button>
            </form>
        </div>
    )
}