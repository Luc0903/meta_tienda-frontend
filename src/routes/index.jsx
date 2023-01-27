import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import Home from "../pages/Home";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
])