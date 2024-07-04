import { MarvelScreen, DcScreen, HeroScreen, Search } from '../screens';

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
    {
        path: "/search",
        element: <Search />,
    },
];

export { PrivateRouter }
