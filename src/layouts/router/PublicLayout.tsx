
import { Outlet } from 'react-router-dom';
import { Navbar } from '../header/Navbar';

const PublicLayout = ():JSX.Element =>{
    return( 
        <>
            <Navbar />
            <Outlet />
        </>
    );
}

export { PublicLayout }