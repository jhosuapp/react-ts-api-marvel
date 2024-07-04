//React hooks
import { useNavigate } from 'react-router-dom';
//Components
import { Container, Text } from '../../components';

const LoginScreen = ():JSX.Element =>{
    const navigate = useNavigate();
    //Handle navigate click
    const handleClickLogin = ():void=>{
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