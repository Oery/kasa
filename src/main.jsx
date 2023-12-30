import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import ErrorNotFoundPage from "./pages/ErrorNotFoundPage";
import HomePage from "./pages/HomePage";
import LogementPage from "./pages/LogementPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/about",
        element: <AboutPage />,
    },
    {
        path: "/logement/:id",
        element: <LogementPage />,
    },
    {
        path: "*",
        element: <ErrorNotFoundPage />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
