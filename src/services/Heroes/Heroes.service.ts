import axios from 'axios';

//Custom request origin
const ORIGIN = window.location.origin;

//Get heroes
const getHeroes = async ()=>{
    const data = await axios.get(`${ORIGIN}/data/heroes.js`);
    return data;
}

export { getHeroes }