//React hooks
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
//Components && store
import { Container, Text, CardHeroes } from '../../components';
import { useHeroes, useSearch } from '../../store';
import { InputSearch } from './components/InputSearch';
import { NormalizeTextToExp } from '../../components';
import { FilterHeroes } from './components/InputSearchFilter';

const Search = ():JSX.Element =>{
    //Navigate
    const [ searchParams ] = useSearchParams();
    const paramValue = searchParams.get('q');
    const dataHeroes = useHeroes(state => state.dataHeroes);
    const getDataHeroes = useHeroes(state => state.getDataHeroes);
    const statusHeroes = useHeroes(state => state.statusHeroes);
    const valueSearch = useSearch(state => state.valueSearch);
    const setSearchDataHeroes = useSearch(state => state.setSearchDataHeroes);
    const searchDataHeroes = useSearch(state => state.searchDataHeroes);
    //Get heroes data
    useEffect(()=>{
        getDataHeroes();
    },[]);
    //Filter heroes if we has a param value
    useEffect(()=>{
        setSearchDataHeroes(dataHeroes);
        if(paramValue && dataHeroes.length > 0){
            const clearText = NormalizeTextToExp(paramValue);
            const filter = FilterHeroes(dataHeroes, clearText);
            //Set heroes filtered        
            setSearchDataHeroes(filter);
        }
    }, [dataHeroes]);

    return(
        <Container className={`ctn search ctn--top ctn--bottom fade-in ${statusHeroes == 'success' && 'animate'}`}>
            <article className='search-filter'>
                <Text headingType='h1'>Search</Text>
                <form noValidate>
                    <fieldset className='custom-input'>
                        {statusHeroes == 'success' && <InputSearch />}
                    </fieldset>
                    <fieldset className="switch switch--margin">
                        <Text>DC</Text>
                        <label htmlFor={`check-dc`}>
                            <input 
                                type="checkbox" 
                                name={`check-dc`} 
                                id={`check-dc`} 
                            />
                        </label>
                    </fieldset>
                    <fieldset className="switch">
                        <Text>Marvel</Text>
                        <label htmlFor={`check-marvel`}>
                            <input 
                                type="checkbox" 
                                name={`check-marvel`} 
                                id={`check-marvel`} 
                            />
                        </label>
                    </fieldset>
                </form>
            </article>
            <article className='search-results'>
                <Text headingType='h3'>{`${valueSearch ? `Results for ${ valueSearch }` : 'Show all results'}`}</Text>
                <div className='search-results__ctn'>
                    {searchDataHeroes.length > 0 && searchDataHeroes.map((data)=>(
                        <CardHeroes  data={ data } key={ data.id } />
                    ))}
                </div>
            </article>
        </Container>
    )
}

export { Search }