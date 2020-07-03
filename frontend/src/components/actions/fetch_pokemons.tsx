import { IPokemon } from "../reducers/pokemons"

export const fetchPokemons = (payload: IPokemon) => {
    return {
        type: 'FETCH_DATA',
        payload
    }
}