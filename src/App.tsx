import './sass/main.scss';
//Router
import { AppRouter } from './routers/AppRouter';
import { useAuth } from './store/index';
import { useEffect } from 'react';

const App = ()=> {
    //Store
    const setUser = useAuth(state => state.setUser);
    const user:string | null = localStorage.getItem('user');
    //Validate if user exists
    useEffect(()=>{
        if(user){
            const parseUser: { user_name: string } = JSON.parse(user);
            setUser({
                user_name: parseUser.user_name,
                token: 'asdasda12312adasdqwjads',
                logged: true
            });
        }else{
            setUser({
                logged: false
            });
        }
    }, [user]);

    return (
        <>
            <AppRouter />
        </>
    )
}

export default App;