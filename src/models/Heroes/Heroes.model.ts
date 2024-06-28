export type HeroesStatus = 'loading' | 'success' | 'error' | null;

export type HeroesData = FieldsHeroesData[]

export type FieldsHeroesData = {
    id: string,
    superhero: string, 
    publisher: string, 
    alter_ego: string,
    first_appearance:string,
    characters:string
}