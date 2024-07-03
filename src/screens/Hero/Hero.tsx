import { useEffect, useState } from 'react';
import { useHeroes } from '../../store/';
import { Container, Text } from '../../components';
import { FieldsHeroesData } from '../../models';
import { useParams, useNavigate  } from 'react-router-dom';
import iconRight from '/assets/img/svg/circle-right-regular.svg';
import iconLeft from '/assets/img/svg/circle-left-regular.svg';

const HeroScreen = ():JSX.Element =>{
    const getDataHeroes = useHeroes(state => state.getDataHeroes);
    const dataHeroes = useHeroes(state => state.dataHeroes);
    const [ heroe, setHeroe ] = useState<FieldsHeroesData>({} as FieldsHeroesData);
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
            setHeroe(filterHeroesById || {} as FieldsHeroesData); 
            if(!filterHeroesById) return navigate('/dc');
        }

    }, [dataHeroes]);

    return( 
        <Container className='ctn ctn--column ctn--top ctn--bottom ctn--fullheight'>
            {heroe && 
                <>
                    <article className='heroe-detail'>
                        <picture>
                            <img src={`/assets/img/heroes/${heroe.id}.jpg`} alt={ heroe.superhero } />
                        </picture>
                        <div className='content'>
                            <Text headingType={'h1'}>{ heroe.superhero }</Text>
                            <Text><b>Alter ego:</b> { heroe.alter_ego }</Text>
                            <Text><b>Characters:</b> { heroe.characters }</Text>
                            <Text><b>Personajes:</b> { heroe.characters }</Text>
                            <Text><b>First appearance:</b> { heroe.first_appearance }</Text>
                            <Text><b>publisher:</b> { heroe.publisher }</Text>
                        </div>
                    </article>
                    <article className='hero-nav'>
                        <button>
                            <img src={ iconLeft } alt="Icon left" />
                        </button>
                        <button>
                            <img src={ iconRight } alt="Icon right" />
                        </button>
                    </article>
                </>
            }
        </Container>
    );
}

export { HeroScreen }