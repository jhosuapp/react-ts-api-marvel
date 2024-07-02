import { useEffect, useState } from 'react';
import { useHeroes } from '../../store/';
import { Container } from '../../components';
import { useParams, useNavigate  } from 'react-router-dom';

const HeroScreen = ():JSX.Element =>{
    const getDataHeroes = useHeroes(state => state.getDataHeroes);
    const dataHeroes = useHeroes(state => state.dataHeroes);
    const [ heroe, setHeroe ] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();
    //Get data
    useEffect(()=>{
        getDataHeroes();
    },[]);
    //Validate if heroe exists
    useEffect(()=>{
        if(dataHeroes[0]){
            const filterHeroesById = dataHeroes.find(heroe => heroe.id == id);
            setHeroe(filterHeroesById || ''); 
            if(!filterHeroesById) return navigate('/dc');
        }

    }, [dataHeroes]);

    return( 
        <Container className='ctn ctn--column ctn--top ctn--bottom ctn--fullheight'>
            <h1 className='mt-30'></h1>
        </Container>
    );
}

export { HeroScreen }