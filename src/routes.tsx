import { Navigate } from 'react-router-dom';
import MainLayout from './components/mainLayout';
import LandingPage from './views/landing';
import MediaItemPage from './views/mediaItem';

const routes = [
    {
        path: '/',
        element: <MainLayout />,
        children: [
            { path: 'home/', element: <LandingPage /> },
            { path: 'media/:guid/', element: <MediaItemPage/>},
            { path: '/', element: <Navigate to={'/home/'} /> },
        ]
    },
];

export default routes;
