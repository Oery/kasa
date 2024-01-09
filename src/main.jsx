import React from "react";
import ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
    Navigate,
} from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import ErrorNotFoundPage from "./pages/ErrorNotFoundPage";
import HomePage from "./pages/HomePage";
import LogementPage from "./pages/LogementPage";

const isDev = import.meta.env.MODE === "development";

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
        path: "/error",
        element: <ErrorNotFoundPage />,
    },
    {
        path: "*",
        element: <Navigate to="/error" replace={true} />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    isDev ? (
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    ) : (
        <RouterProvider router={router} />
    )
);
