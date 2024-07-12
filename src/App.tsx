import './sass/main.scss';
//Router
import { AppRouter } from './routers/AppRouter';
import { useEffect } from 'react';
//Hooks
import { useAuthHook } from './hooks/index';

const App = ()=> {
    //Store
    const user:string | null = localStorage.getItem('user');
    const { validateIfUserExists } = useAuthHook();
    //Validate if user exists
    useEffect(()=>{
        validateIfUserExists();
    }, [user]);

    return (
        <>
            <AppRouter />
        </>
    )
}

export default App;