import {create} from 'zustand';

import { getHeroes } from '../../services';
import { HeroesStatus, HeroesData } from '../../models';

interface HeroesProps {
    dataHeroes: HeroesData,
    statusHeroes: HeroesStatus;
    getDataHeroes: ()=> void;
}

const useHeroes = create<HeroesProps>()((set) => ({
    //Default values
    dataHeroes: {} as HeroesData,
    statusHeroes: null,

    //SetValues
    getDataHeroes: async ()=>{
        set({statusHeroes: 'loading'});
        try {
            const data = await getHeroes();
            data.data ? set({dataHeroes: data.data, statusHeroes: 'success'}) : set({statusHeroes: 'error'});
        } catch (error) {
            set({statusHeroes: 'error'})
        }
    }
}));

export { useHeroes }