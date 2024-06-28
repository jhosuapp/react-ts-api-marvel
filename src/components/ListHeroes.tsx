import { useHeroes } from '../store/';
import { CardHeroes } from '../components/';

type Props = {
    publisher: 'Marvel Comics' | 'DC Comics'
}

const ListHeroes = ( { publisher }: Props )=>{
    const dataHeroes = useHeroes(state => state.dataHeroes);
    const validPublisher = ['Marvel Comics', 'DC Comics'];
    //Validate if publisher is valid
    if(!validPublisher.includes( publisher )){
        throw new Error(`Publisher ${ publisher } no es correcto`);
    }
    //Filter by publisher
    const filterByPublisher = dataHeroes.filter(item => item.publisher === publisher);

    return(
        <>
            {filterByPublisher.length && filterByPublisher.map((dataHero, index)=>(
                <CardHeroes key={ index } data={ { ...dataHero } }  />
            ))}
        </>
    );
}

export { ListHeroes }