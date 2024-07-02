import { MarvelScreen, DcScreen, HeroScreen } from '../screens';

const PrivateRouter = [
    {
        path: "/marvel",
        element: <MarvelScreen />,
    },
    {
        path: "/dc",
        element: <DcScreen />,
    },
    {
        path: "/detail-hero/:id",
        element: <HeroScreen />,
    },
];

export { PrivateRouter }
