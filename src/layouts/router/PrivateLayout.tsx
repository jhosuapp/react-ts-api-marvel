
import { useAuth } from '../../store/index';
import { Navbar } from '../../layouts/header/Navbar';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const PrivateLayout = ():JSX.Element =>{

    const user = useAuth(state => state.user);
    const navigate = useNavigate();
    const location = useLocation();
    //Save last path
    localStorage.setItem('lastPath', location.pathname);
    //Validate if user is logged
    useEffect(()=>{
        user.logged === false && navigate('/');
    }, [user]);

    return( 
        <>
            <Navbar enableNav />
            <Outlet />
        </>
    );
}

export { PrivateLayout }