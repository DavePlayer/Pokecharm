import { combineReducers } from 'redux'
import { pokemons, IPokemon } from './pokemons'

export type combinedReducers = {
    pokemons: Array<IPokemon>
}

export const reducers = combineReducers({
    pokemons
})