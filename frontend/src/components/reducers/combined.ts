import { combineReducers } from 'redux'
import { pokemons, IPokemon } from './pokemons'
import { didFetch } from './didFetch'
import { user, IUser } from './user'

export type combinedReducers = {
    pokemons: Array<IPokemon>,
    didFetch: boolean,
    user: IUser
}

export const reducers = combineReducers({
    pokemons,
    didFetch,
    user
})