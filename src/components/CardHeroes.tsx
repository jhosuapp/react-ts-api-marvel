import { Link } from 'react-router-dom';
import { FieldsHeroesData } from '../models/';
import { Text } from '../components/';

type Props = {
    data: FieldsHeroesData
}

const CardHeroes = ( { data }:Props )=>{

    return(
        <>
            <Link to={ `/detail-hero/${data.id}` } className='card-hero'>
                <picture>
                    <img src={`/assets/img/heroes/${data.id}.jpg`} alt={ data.superhero } />
                </picture>
                <div className="content">
                    <Text headingType={'h5'}>{ data.superhero }</Text>
                    <Text><b>Alter ego:</b> { data.alter_ego }</Text>
                    <Text><b>Characters:</b> { data.characters }</Text>
                </div>
            </Link>
        </>
    );
}

export { CardHeroes }