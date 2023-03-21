import React, { useState } from "react";
import { redirect, useNavigate } from "react-router-dom";

export function AdminLogin() {

    const navigate = useNavigate();

    const credentials = {
        userName: "admin",
        password: "admin"
    }

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
        if (formData.userName.trim() == credentials.userName && formData.password.trim() == credentials.password) {
            navigate("/allStudents");
        }
    }

    function handleStudentLogin(e) {
        e.preventDefault();
        navigate("/studentLogin", { replace: true });
    }

    return (
        <div className="container p-5 my-5">
            <h1>Admin Login</h1>
            <form className="border p-5">
                <div className="form-group">
                    <label htmlFor="userName">User Name</label>
                    <input name="userName" type="text" className="form-control" id="userName" placeholder="User Name" onChange={handleChange} required />
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="userPassword">Password</label>
                    <input name="password" type="password" className="form-control" id="userPassword" placeholder="Password" onChange={handleChange} required />
                </div>
                <button className="btn btn-primary mt-3" onClick={handleLogin}>Login</button>
                <button className="btn btn-secondary mt-3 mx-4" onClick={handleStudentLogin}>Enter as a student</button>
            </form>
        </div>
    )
}