import type { ChangeEventHandler } from 'react';
import { useEffect } from 'react';
import { useNavigate, useSearchParams  } from 'react-router-dom';
import { useSearch, useHeroes } from '../../../store';
import { NormalizeTextToExp } from '../../../components';
import { FilterHeroes } from './InputSearchFilter';

const InputSearch = ():JSX.Element =>{
    //Navigate
    const navigate = useNavigate();
    const [ searchParams ] = useSearchParams();
    const paramValue = searchParams.get('q');
    //Store
    const valueSearch = useSearch(state => state.valueSearch);
    const setValueSearch = useSearch(state => state.setValueSearch);
    const dataHeroes = useHeroes(state => state.dataHeroes);
    const setSearchDataHeroes = useSearch(state => state.setSearchDataHeroes);
    //Handles
    const handleChangeSearch:ChangeEventHandler<HTMLInputElement> = (e)=>{
        const value = e.target.value;
        setValueSearch(value);
        navigate(`/search/?q=${value}`);
        //Filer heroes
        const clearText = NormalizeTextToExp(value);
        const filter = FilterHeroes(dataHeroes, clearText);
        //Set heroes filtered        
        setSearchDataHeroes(filter);
    }
    //Set values if exists query param
    useEffect(()=>{
        setValueSearch(paramValue || '');
    }, []);
    
    return (
        <input 
            type="text" 
            placeholder='Enter a superhero name'
            onChange={ (e) => handleChangeSearch(e)  }
            value={ valueSearch }
        />
    )
}

export { InputSearch }