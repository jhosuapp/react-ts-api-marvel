import { useEffect, useState } from 'react';
import { useHeroes } from '../../store/';
import { Container, Text } from '../../components';
import { useParams, useNavigate  } from 'react-router-dom';
import iconRight from '/assets/img/svg/circle-right-regular.svg';
import iconLeft from '/assets/img/svg/circle-left-regular.svg';

const HeroScreen = ():JSX.Element =>{
    const getDataHeroes = useHeroes(state => state.getDataHeroes);
    const statusHeroes = useHeroes(state => state.statusHeroes);
    const dataHeroes = useHeroes(state => state.dataHeroes);
    const [ heroeId, setHeroId] = useState<number>();
    const { id } = useParams();
    const navigate = useNavigate();
    //Get data
    useEffect(()=>{
        getDataHeroes();
    },[]);
    //Validate if heroe exists
    useEffect(()=>{
        if(dataHeroes[0]){
            const findIndexHero = dataHeroes.findIndex(heroe => heroe.id == id);
            setHeroId(findIndexHero);
            if(findIndexHero < 0) return navigate('/dc');
        }

    }, [dataHeroes, heroeId]);

    const handleClickNav = (isPrev?: boolean)=>{
        if(heroeId !== undefined){
            if(isPrev){
                setHeroId(heroeId + 1);
                dataHeroes[heroeId - 1] && navigate(`/detail-hero/${dataHeroes[heroeId - 1].id}`);
            }else{
                setHeroId(heroeId - 1);
                dataHeroes[heroeId + 1] && navigate(`/detail-hero/${dataHeroes[heroeId + 1].id}`);
            }
        }
    }

    return( 
        <Container className={`ctn ctn--column ctn--top ctn--bottom ctn--fullheight fade-in ${statusHeroes == 'success' && 'animate'}`}>
            {dataHeroes[heroeId || 0] && 
                <>
                    <article className='heroe-detail'>
                        <picture>
                            <img src={`/assets/img/heroes/${dataHeroes[heroeId || 0].id}.jpg`} alt={ dataHeroes[heroeId || 0].superhero } />
                        </picture>
                        <div className='content'>
                            <Text headingType={'h1'}>{ dataHeroes[heroeId || 0].superhero }</Text>
                            <Text><b>Alter ego:</b> { dataHeroes[heroeId || 0].alter_ego }</Text>
                            <Text><b>Characters:</b> { dataHeroes[heroeId || 0].characters }</Text>
                            <Text><b>Personajes:</b> { dataHeroes[heroeId || 0].characters }</Text>
                            <Text><b>First appearance:</b> { dataHeroes[heroeId || 0].first_appearance }</Text>
                            <Text><b>publisher:</b> { dataHeroes[heroeId || 0].publisher }</Text>
                        </div>
                    </article>
                    <article className='hero-nav'>
                        <button onClick={ () => handleClickNav(true) }>
                            <img src={ iconLeft } alt="Icon left" />
                        </button>
                        <button onClick={ () => handleClickNav() }>
                            <img src={ iconRight } alt="Icon right" />
                        </button>
                    </article>
                </>
            }
        </Container>
    );
}

export { HeroScreen }