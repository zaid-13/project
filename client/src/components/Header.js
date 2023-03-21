import React from 'react';
import { Link } from 'react-router-dom';

export function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Student Info</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/allStudents"><span className="nav-link"><button className="btn btn-outline-primary">Show Students</button></span></Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/addStudent"><span className="nav-link"><button className="btn btn-outline-secondary">Add Student</button></span></Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/"><span className="nav-link"><button className="btn btn-outline-danger">Log out</button></span></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}