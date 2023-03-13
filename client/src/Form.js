import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export function Form() {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        emailId: ""
    })

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log(this.responseText);
                navigate("/allStudents");
            }
        };
        xhttp.open("POST", "http://localhost:3000/api/createUser", true);
        xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.send(JSON.stringify(formData));
    }

    return (
        <form>
            <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input name="firstName" type="text" className="form-control" id="firstName" placeholder="Enter First Name" onChange={handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input name="lastName" type="text" className="form-control" id="lastName" placeholder="Enter Last Name" onChange={handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="lastName">Email id</label>
                <input name="emailId" type="email" className="form-control" id="lastName" placeholder="Enter Email Id" onChange={handleChange} />
            </div>
            <div className="form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div >
            <button type="submit" className="btn btn-primary mt-2" onClick={handleSubmit}>Add Student</button>
        </form >
    )
}
