
export const canShowFilters = (state:boolean = false, action:any) => {
    switch(action.type){
       case 'CHANGE_FILTERS_DISPLAY_STATE':
           if(action.payload == true || action.payload == false)
            return state = action.payload
           else
            return !state
        default:
            return state
    }
}