
export interface IPokemon {
    id: number,
    name: string,
    status: string,
    imgUrl: string
}


export const pokemons = (state:Array<IPokemon> = [], action:any) => {
    switch(action.type){
        case "FETCH_DATA":
            return state = [...state, action.payload]
        default:
            return state
    }
}