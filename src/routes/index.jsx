import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import Home from "../pages/Home";
import ProfilePage from '../pages/ProfilePage'
import SearchPage from '../pages/SearchPage'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/search',
        element: <SearchPage />
    },
    {
        path: '/profile',
        element: <ProfilePage />
    }
])