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
        <Container className='ctn ctn--column ctn--top ctn--bottom ctn--fullheight'>
            <h1 className='mt-30'>DC</h1>
            <article className='list-heroes'>
                {statusHeroes == 'success' && <ListHeroes publisher='DC Comics' />}
            </article>
        </Container>
    );
}

export { DcScreen }