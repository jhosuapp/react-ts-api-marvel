import { useEffect } from 'react';
import { Container, Text, CardHeroes } from '../../components';
import { useHeroes } from '../../store';
const Search = ():JSX.Element =>{
    const dataHeroes = useHeroes(state => state.dataHeroes);
    const getDataHeroes = useHeroes(state => state.getDataHeroes);
    const statusHeroes = useHeroes(state => state.statusHeroes);

    useEffect(()=>{
        getDataHeroes();
    },[]);

    return(
        <Container className={`ctn search ctn--top ctn--bottom fade-in ${statusHeroes == 'success' && 'animate'}`}>
            <article className='search-filter'>
                <Text headingType='h1'>Search</Text>
                <form noValidate>
                    <fieldset className='custom-input'>
                        <input 
                            type="text" 
                            placeholder='Enter a superhero name'
                        />
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
                <Text headingType='h3'>Show all results</Text>
                <div className='search-results__ctn'>
                    {dataHeroes.length > 0 && dataHeroes.map((data)=>(
                        <CardHeroes  data={ data } key={ data.id } />
                    ))}
                </div>
            </article>
        </Container>
    )
}

export { Search }