export const changeFiltersDisplayState = (payload?:boolean) => {
    return {
        type: 'CHANGE_FILTERS_DISPLAY_STATE',
        payload,
    }
}