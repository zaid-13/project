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
        xhttp.open("GET", "http://localhost:3000/api/getUsers", true);
        xhttp.send();
    }, []);

    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Email id</th>
                </tr>
            </thead>
            <tbody>
                {
                    studentsData.map(function (elem, i) {
                        return (
                            <tr key={elem._id}>
                                <th scope="row">{i + 1}</th>
                                <td>{elem.firstName}</td>
                                <td>{elem.lastName}</td>
                                <td>{elem.emailId}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}