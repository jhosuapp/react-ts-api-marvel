import { useEffect } from 'react';
import { useHeroes } from '../../store/';
import { ListHeroes, Container } from '../../components';

const DcScreen = ():JSX.Element =>{
    const getDataHeroes = useHeroes(state => state.getDataHeroes);
    const statusHeroes = useHeroes(state => state.statusHeroes);

    useEffect(()=>{
        getDataHeroes();
    },[]);

    return( 
        <Container className='ctn ctn--top ctn--fullheight'>
            <article>
                <h1>DC SCREEN</h1>
                {statusHeroes == 'success' && <ListHeroes publisher='DC Comics' />}
            </article>
        </Container>
    );
}

export { DcScreen }