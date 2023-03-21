import React from 'react';

import { createBrowserRouter } from "react-router-dom";
import { Form } from "./components/Form";
import { Header } from './components/Header';
import { AdminLogin } from "./components/AdminLogin";
import { StudentLogin } from './components/StudentLogin';
import { Students } from "./components/AllStudents";
import { Home } from './components/Home';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/adminLogin",
        element: <AdminLogin />
    },
    {
        path: "/studentLogin",
        element: <StudentLogin />
    },
    {
        path: "/allStudents",
        element: <><Header /><Students /></>,
    },
    {
        path: "/addStudent",
        element: <Form />
    }
]);

export default router;