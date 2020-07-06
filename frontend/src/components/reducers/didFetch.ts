export const didFetch = (state:boolean=false, action:any) => {
    switch(action.type){
        case "CHANGE_DID_FETCH":
            return state = action.payload
        default:
            return state
    }
}