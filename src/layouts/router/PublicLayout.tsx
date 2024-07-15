
import { useAuth } from '../../store/index';
import { Navbar } from '../../layouts/header/Navbar';
import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const PublicLayout = ():JSX.Element =>{

    const user = useAuth(state => state.user);
    const navigate = useNavigate();

    useEffect(()=>{
        user.logged === true && navigate('/marvel');
    }, [user]);

    return( 
        <>
            <Navbar />
            <Outlet />
        </>
    );
}

export { PublicLayout }