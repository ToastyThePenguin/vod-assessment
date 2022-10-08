import { Navigate } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import LandingPage from './views/landing';
import CollectionPage from './views/collection';
import SeriesPage from './views/series';
import MediaItemPage from './views/mediaItem';

const routes = [
    {
        path: '/',
        element: <MainLayout />,
        children: [
            { path: 'home', element: <LandingPage /> },
            { path: 'collection', element: <CollectionPage /> },
            { path: 'series', element: <SeriesPage /> },
            { path: 'item', element: <MediaItemPage/>},
            { path: '/', element: <Navigate to={'/home'} /> },
        ]
    },
];

export default routes;
