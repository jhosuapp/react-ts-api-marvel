
import { Outlet } from 'react-router-dom';

const PublicLayout = ():JSX.Element =>{
    return( 
        <>
            <p>Layout publico</p>
            <Outlet />
        </>
    );
}

export { PublicLayout }