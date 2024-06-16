import { MarvelScreen, DcScreen } from '../screens';

const PrivateRouter = [
    {
        path: "/marvel",
        element: <MarvelScreen />,
    },
    {
        path: "/dc",
        element: <DcScreen />,
    },
];

export { PrivateRouter }
