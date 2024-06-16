import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { PrivateRouter } from './PrivateRouter';
import { PublicRouter } from './PublicRouter';
import { PrivateLayout, PublicLayout } from "../layouts";
  
const AppRouter = () => {

    const router = createBrowserRouter([
        {
          path: "/",
          element: <PublicLayout />,
          children: PublicRouter,
        },
        {
          path: "/",
          element: <PrivateLayout />,
          children: PrivateRouter,
        },
    ]);

    return <RouterProvider router={ router } />;
}

export { AppRouter }