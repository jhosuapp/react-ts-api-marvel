//React hooks
import { useNavigate } from 'react-router-dom';
//Components && tyoes
import { Container, Text } from '../../components/index';
import { useAuth } from '../../store/index';

const LoginScreen = ():JSX.Element =>{
    const navigate = useNavigate();
    const setUser = useAuth(state => state.setUser);
    //Handle navigate click
    const handleClickLogin = ():void=>{
        const dataUser = {
            user_name: 'jhosua',
            logged: true,
        }
        //Logged user
        localStorage.setItem('user', JSON.stringify( dataUser ));
        setUser(dataUser);
        //Redirect
        navigate('/marvel', { replace: true });
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