import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LogementsPage from "./pages/LogementsPage";
import AboutPage from "./pages/AboutPage";
import ErrorNotFoundPage from "./pages/ErrorNotFoundPage";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/logements",
        element: <LogementsPage />,
    },
    {
        path: "/about",
        element: <AboutPage />,
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
