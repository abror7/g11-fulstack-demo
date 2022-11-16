import React from 'react';
import ReactDOM from 'react-dom/client'
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import {createBrowserRouter, createHashRouter, RouterProvider} from "react-router-dom";
import ErrorPage from "./components/error-page";
import Tasklar from "./routes/task/tasklar";
import About from "./routes/about";
import TaskById, {loader as taskLoader} from "./routes/task/task-by-id";


const router = createHashRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/tasklar",
                element: <Tasklar/>,
            },
            {
                path: "/tasklar/:taskId",
                element: <TaskById/>,
                loader: taskLoader
            },
            {
                path: "/about",
                element: <About/>,
            }
        ]
    },


])

ReactDOM.createRoot(document.getElementById("root"))
    .render(
        <React.StrictMode>
            <RouterProvider router={router}/>
        </React.StrictMode>
    )

