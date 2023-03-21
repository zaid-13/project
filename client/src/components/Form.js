import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export function Form() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        emailId: "",
        studentId: "",
        rollNo: ""
    })

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
        console.log(formData);
    }

    function handleSubmit(e) {
        e.preventDefault();
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                // console.log(this.responseText);
                navigate("/allStudents");
            }
        };
        xhttp.open("POST", "http://localhost:3000/api/createStudent", true);
        xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.send(JSON.stringify(formData));
    }

    return (
        <div className="container p-2 my-4">
            <button className="btn btn-secondary" onClick={() => navigate(-1)}>Go back</button>
            <form className="border p-5 mt-4">
                <div className="form-group mt-2">
                    <label htmlFor="firstName">First Name</label>
                    <input name="firstName" type="text" className="form-control" id="firstName" placeholder="Enter First Name" onChange={handleChange} />
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="lastName">Last Name</label>
                    <input name="lastName" type="text" className="form-control" id="lastName" placeholder="Enter Last Name" onChange={handleChange} />
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="email">Email id</label>
                    <input name="emailId" type="email" className="form-control" id="email" placeholder="Enter Email Id" onChange={handleChange} />
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="studentId">Student Id</label>
                    <input name="studentId" type="number" className="form-control" id="studentId" placeholder="Enter Student Id" onChange={handleChange} />
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="rollNo">Roll No</label>
                    <input name="rollNo" type="number" className="form-control" id="rollNo" placeholder="Enter Roll No" onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-primary mt-2" onClick={handleSubmit}>Add Student</button>
            </form>
        </div>
    )
}
