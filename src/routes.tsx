import { Navigate } from 'react-router-dom';
import MainLayout from './components/mainLayout';
import LandingPage from './views/landing';
import MediaItemPage from './views/mediaItem';
import SeriesPage from './views/series';

const routes = [
    {
        path: '/',
        element: <MainLayout />,
        children: [
            { path: 'home/', element: <LandingPage /> },
            { path: 'media/:guid/', element: <MediaItemPage/>},
            { path: 'series/:guid/', element: <SeriesPage/>},
            { path: '/', element: <Navigate to={'/home/'} /> },
            { path: '*', element: <Navigate to={'/home/'} /> },
        ]
    },
];

export default routes;
