
import { Navbar } from '../../layouts/header/Navbar';
import { Outlet } from 'react-router-dom';

const PrivateLayout = ():JSX.Element =>{
    return( 
        <>
            <Navbar enableNav />
            <Outlet />
        </>
    );
}

export { PrivateLayout }