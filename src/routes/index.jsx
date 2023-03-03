import { createBrowserRouter } from 'react-router-dom';
import AdminPage from '../pages/AdminPage';
import Home from '../pages/Home';
import ProfilePage from '../pages/ProfilePage';
import SearchPage from '../pages/SearchPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/search',
    element: <SearchPage />,
  },
  {
    path: '/profile',
    element: <ProfilePage />,
  },
  {
    path: '/admin',
    element: <AdminPage />,
  },
]);
