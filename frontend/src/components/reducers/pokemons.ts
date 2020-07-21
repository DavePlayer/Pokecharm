
export interface IPokemon {
    id: number,
    name: string,
    normalStatus: string,
    shinyStatus: string,
    imgUrl: string,
    details: Object
}


export const pokemons = (state:Array<IPokemon> = [], action:any) => {
    switch(action.type){
        case "FETCH_DATA":
            return state = [...state, action.payload]
        default:
            return state
    }
}