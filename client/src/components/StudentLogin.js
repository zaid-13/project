import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export function StudentLogin() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({ email: "", password: "" });

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
        console.log(formData);
    }

    function handleStudentLogin(e) {
        e.preventDefault();

        if (formData.email.trim() === "" || formData.password.trim() === "") {
            showAlertBox("You should check in on some of those fields below.")
            return;
        }

        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var data = JSON.parse(this.responseText || '{}')
                console.log({ data });

                if (data.message === "success") {
                    navigate("/allStudents");
                }

                if (data.message === "fail") {
                    showAlertBox("Invalid Credentials!");
                }
            }
        };
        xhttp.open("POST", "http://localhost:3000/api/loginStudent", true);
        xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.send(JSON.stringify(formData));
    }

    function handleClick(e) {
        e.preventDefault();
        navigate("/adminLogin", { replace: true });
    }

    function showAlertBox(message) {
        const errorAlertBox = document.getElementById("error-alert-box");
        errorAlertBox.classList.add("show");
        errorAlertBox.innerHTML = message;
        setTimeout(function () {
            errorAlertBox.classList.remove("show");
        }, 3000)
    }

    return (
        <div className="container p-5 my-5">
            <div id="error-alert-box" class="position-absolute top-0 start-50 translate-middle-x alert alert-warning alert-dismissible fade" role="alert">
                <strong>Dear Student!</strong> You should check in on some of those fields below.
            </div>
            <h1>Student Login</h1>
            <form className="border p-5">
                <div className="form-group">
                    <label htmlFor="studentEmail">Email</label>
                    <input name="email" type="text" className="form-control" id="studentEmail" placeholder="Enter your first name" onChange={handleChange} required />
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="studentPassword">Password</label>
                    <input name="password" type="password" className="form-control" id="studentPassword" placeholder="Your password is your ID number" onChange={handleChange} required />
                </div>
                <button className="btn btn-primary mt-3" onClick={handleStudentLogin}>Login</button>
                <button className="btn btn-secondary mt-3 mx-4" onClick={handleClick}>Enter as an Admin</button>
            </form>
        </div>
    )
}