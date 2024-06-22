export type HeroesStatus = 'loading' | 'success' | 'error' | null;

export type HeroesData = [{
    id: string,
    superhero: string, 
    publisher: string, 
    alter_ego: string,
    first_appearance:string,
    characters:string
}]