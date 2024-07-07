import { create } from 'zustand';
import { HeroesData } from '../../models';

interface SearchProps {
    valueSearch: string;
    searchDataHeroes: HeroesData,
    setValueSearch: (value: string) => void;
}

const useSearch = create<SearchProps>()((set) => ({
    //Default values
    valueSearch: '',
    searchDataHeroes: {} as HeroesData,
    //Functions
    setValueSearch: (value: string)=> set({valueSearch: value})
}));

export { useSearch }