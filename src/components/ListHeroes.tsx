import { useHeroes } from '../store/';

type Props = {
    publisher: 'Marvel Comics' | 'DC Comics'
}

const ListHeroes = ( { publisher }: Props )=>{
    const dataHeroes = useHeroes(state => state.dataHeroes);
    const validPublisher = ['Marvel Comics', 'DC Comics'];

    if(!validPublisher.includes( publisher )){
        throw new Error(`Publisher ${ publisher } no es correcto`);
    }
    const duplicateHeroes = [...dataHeroes];

    return(
        <ul>
            <li>hola</li>
            <li>hola</li>
            <li>hola</li>
            <li>hola</li>
            <li>hola</li>
            <li>hola</li>
            <li>hola</li>
            <li>hola</li>
            <li>hola</li>
        </ul>
    );
}

export { ListHeroes }