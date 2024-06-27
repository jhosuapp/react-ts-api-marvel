import { useEffect } from 'react';
import { useHeroes } from '../../store/';
import { ListHeroes, Container } from '../../components';

const MarvelScreen = ():JSX.Element =>{
    const getDataHeroes = useHeroes(state => state.getDataHeroes);
    const statusHeroes = useHeroes(state => state.statusHeroes);

    useEffect(()=>{
        getDataHeroes();
    },[]);

    return( 
        <Container className='ctn ctn--top ctn--fullheight'>
            <article>
                <h1>MARVEL SCREEN</h1>
                {statusHeroes == 'success' && <ListHeroes publisher='Marvel Comics' />}
            </article>
        </Container>
    );
}

export { MarvelScreen }