import React from 'react';
import { useNavigate } from 'react-router-dom';

export function Home() {

    const navigate = useNavigate();

    function handleClick(e) {
        navigate(e.target.getAttribute("data-path"));
    }

    return (
        <div className="bg-light p-5 text-center ">
            <h2>Welcome to STUDENTINFO</h2>
            <p>Click on the button that describes you:</p>
            <button data-path="/adminLogin" className="btn btn-primary my-2" onClick={handleClick}>I'm an admin</button>
            <br />
            <button data-path="/studentLogin" className="btn btn-success my-2" onClick={handleClick}>I'm a student</button>
        </div>
    )
}