import { NormalizeText } from '../../../components';
import { HeroesData } from '../../../models';

const FilterHeroes = (dataHeroes: HeroesData, value: RegExp)=>{
    const filter = dataHeroes.filter((data) => {
        const normalizedHeroName = NormalizeText(data.superhero);
        return value.test(normalizedHeroName);
    });

    return filter;
}

export { FilterHeroes }