import React, { useEffect, useState } from "react";
import modalObj from "./Modal";

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
        modalObj.open(<UpdateModal />);
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

    function UpdateModal() {

        function handleChange() {
            console.log("change");
        }

        return (
            <>
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle">Update Student</h5>
                    <button type="button" class="btn btn-secondary close" data-dismiss="modal" aria-label="Close" onClick={() => modalObj.close()}>
                        <span aria-hidden="true">X</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form className="p-2">
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
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={() => modalObj.close()}>Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </>
        )
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