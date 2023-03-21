import React, { useEffect, useState } from "react";

export function Students() {

    const [studentsData, setStudentsData] = useState([]);

    useEffect(function () {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var data = JSON.parse(this.responseText || '{}')
                setStudentsData(data.data);
                console.log(data.data);
            }
        };
        xhttp.open("GET", "http://localhost:3000/api/getStudents", true);
        xhttp.send();
    }, []);

    function handleUpdateStudent(e) {
        console.log("update");
    }

    function handleDeleteStudent(e) {
        const id = e.target.parentElement.parentElement.id;
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                // var data = JSON.parse(this.responseText || '{}')
                console.log(this.responseText);
            }
        };
        xhttp.open("DELETE", "http://localhost:3000/api/deleteStudent/" + id, true);
        xhttp.send();
    }

    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Email id</th>
                    <th scope="col">Roll No.</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    studentsData.map(function (elem, i) {
                        return (
                            <tr id={elem._id} key={elem._id}>
                                <th scope="row" className="align-middle">{i + 1}</th>
                                <td className="align-middle">{elem.firstName}</td>
                                <td className="align-middle">{elem.lastName}</td>
                                <td className="align-middle">{elem.emailId}</td>
                                <td className="align-middle">{elem.rollNo}</td>
                                <td className="align-middle">
                                    <button className="btn btn-primary btn-sm" onClick={handleUpdateStudent}>Update</button>
                                    <button className="btn btn-danger btn-sm mx-2" onClick={handleDeleteStudent}>Delete</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}