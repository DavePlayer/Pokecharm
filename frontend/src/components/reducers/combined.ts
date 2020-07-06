import { combineReducers } from 'redux'
import { pokemons, IPokemon } from './pokemons'
import { didFetch } from './didFetch'

export type combinedReducers = {
    pokemons: Array<IPokemon>,
    didFetch: boolean
}

export const reducers = combineReducers({
    pokemons,
    didFetch
})