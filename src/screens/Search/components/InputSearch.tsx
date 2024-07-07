import type { ChangeEventHandler } from 'react';
import { useEffect } from 'react';
import { useNavigate, useSearchParams  } from 'react-router-dom';
import { useSearch } from '../../../store';



const InputSearch = ():JSX.Element =>{
    //Navigate
    const navigate = useNavigate();
    const [ searchParams ] = useSearchParams();
    const paramValue = searchParams.get('q');
    //Store
    const valueSearch = useSearch(state => state.valueSearch);
    const setValueSearch = useSearch(state => state.setValueSearch);
    //Handles
    const handleChangeSearch:ChangeEventHandler<HTMLInputElement> = (e)=>{
        setValueSearch(e.target.value);
        navigate(`/search/?q=${e.target.value}`);
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