

export type FilterState = {
    gameVersion: number;
    pokedex: string;
    statusFilter: string;
    shineHelper: boolean;
}

const initial:FilterState = {
    gameVersion: 1,
    pokedex: 'kanto',
    statusFilter: 'all',
    shineHelper: false
}

export const filters = (state:FilterState = initial, action:any) => {
    switch(action.type){
        case "CHANGE_GAME_VERSION":
            return state = {
                gameVersion: action.payload,
                pokedex: state.pokedex,
                statusFilter: state.statusFilter,
                shineHelper: state.shineHelper
            }
        case "SET_STATUS_FILTER":
            return state = {
                gameVersion: state.gameVersion,
                pokedex: state.pokedex,
                statusFilter: action.payload,
                shineHelper: state.shineHelper
            }
        case "SET_SHINY_HELPER":
            return state = {
                gameVersion: state.gameVersion,
                pokedex: state.pokedex,
                statusFilter: state.statusFilter,
                shineHelper: action.payload
            }
        case "CHANGE_POKEDEX":
            return state = {
                gameVersion: state.gameVersion,
                pokedex: action.payload,
                statusFilter: state.statusFilter,
                shineHelper: state.shineHelper
            }
        default:
            return state
    }
}