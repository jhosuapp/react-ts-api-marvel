//React hooks
import { useNavigate } from 'react-router-dom';
//Components && hooks
import { Container, Text } from '../../components/index';
import { useAuthHook } from '../../hooks/index';

const LoginScreen = ():JSX.Element =>{
    const navigate = useNavigate();
    const { loginUser } = useAuthHook();
    //Handle navigate click
    const handleClickLogin = ():void=>{
        loginUser();
        const lastPath = localStorage.getItem('lastPath') || '/marvel';
        //Redirect
        navigate(lastPath, { replace: true });
    }

    return( 
        <Container className={`ctn ctn--top ctn--fullheight fade-in animate animate-delay`}>
            <section className='login'>
                <Text className='center' headingType='h1'>Practice with react router dom</Text>
                <button onClick={ handleClickLogin }  type='button' className='btn'>LOGIN</button>
            </section>
        </Container>
    );
}

export { LoginScreen }