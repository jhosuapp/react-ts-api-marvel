
import { useAuth } from '../store/index';

const dataUser = {
    user_name: 'jhosua penagos',
    token: '123123asdjajsdj',
    logged: true,
}

const useAuthHook = ()=>{
    const setUser = useAuth(state => state.setUser);
    const user:string | null = localStorage.getItem('user');
    //Validate if user exists
    const validateIfUserExists = ()=>{
        if(user){
            const parseUser: { user_name: string } = JSON.parse(user);
            setUser({
                user_name: parseUser.user_name || 'Pepito perez',
                token: '123123asdjajsdj',
                logged: true
            });
        }else{
            setUser({
                logged: false
            });
        }
    }
    //Login
    const loginUser = ()=>{
        localStorage.setItem('user', JSON.stringify( dataUser ));
        setUser(dataUser);
    }
    //Logout
    const logoutUser = ()=>{
        localStorage.removeItem('user');
        setUser({
            logged: false,
        });
    }

    return { loginUser, logoutUser, validateIfUserExists }
}

export { useAuthHook }