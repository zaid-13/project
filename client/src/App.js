import React from "react";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import { Form } from "./Form";
import { Students } from "./Students";
const router = createBrowserRouter([
    {
        path: "/allStudents",
        element: <Students />,
    },
    {
        path: "/addStudent",
        element: <div className="container p-5 my-5 border">
            <Form />
        </div>
    }
]);
export function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>

    )
}