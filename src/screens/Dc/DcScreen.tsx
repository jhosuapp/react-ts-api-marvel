import { useEffect } from 'react';
import { useHeroes } from '../../store/';

const DcScreen = ():JSX.Element =>{
    const getDataHeroes = useHeroes(state => state.getDataHeroes);
    const dataHeroes = useHeroes(state => state.dataHeroes);

    useEffect(()=>{
        getDataHeroes();
    },[]);

    return( 
        <h1>DC SCREEN</h1>
    );
}

export { DcScreen }