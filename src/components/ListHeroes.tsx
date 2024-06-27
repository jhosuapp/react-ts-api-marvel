import { useHeroes } from '../store/';

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
        <ul>
            {filterByPublisher.length && filterByPublisher.map(({ superhero }, index)=>(
                <li key={ index }>{ superhero }</li>
            ))}
        </ul>
    );
}

export { ListHeroes }