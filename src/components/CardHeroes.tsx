import { Link } from 'react-router-dom';
import { FieldsHeroesData } from '../models/';

type Props = {
    data: FieldsHeroesData
}

const CardHeroes = ( { data }:Props )=>{
    console.log();
    return(
        <>
            <Link to={ data.id }>
                <p>{ data.superhero }</p>
                <p>{ data.alter_ego }</p>
                <p>{ data.first_appearance }</p>
                <p>{ data.characters }</p>
            </Link>
        </>
    );
}

export { CardHeroes }