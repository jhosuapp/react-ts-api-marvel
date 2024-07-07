import { create } from 'zustand';
import { HeroesData } from '../../models';

interface SearchProps {
    valueSearch: string;
    searchDataHeroes: HeroesData,
    setValueSearch: (value: string) => void;
    setSearchDataHeroes: (heroes: HeroesData) => void
}

const useSearch = create<SearchProps>()((set) => ({
    //Default values
    valueSearch: '',
    searchDataHeroes: {} as HeroesData,
    //Functions
    setValueSearch: (value: string)=> set({valueSearch: value}),
    setSearchDataHeroes: (heroes: HeroesData)=> set({searchDataHeroes: heroes}),
}));

export { useSearch }