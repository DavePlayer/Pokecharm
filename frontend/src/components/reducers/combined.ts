import { combineReducers } from 'redux'
import { pokemons, IPokemon } from './pokemons'
import { didFetch } from './didFetch'
import { user, IUser } from './user'
import { filters, FilterState } from './filters'

export type combinedReducers = {
    pokemons: Array<IPokemon>,
    didFetch: boolean,
    user: IUser,
    filters: FilterState
}

export const reducers = combineReducers({
    pokemons,
    didFetch,
    user,
    filters
})