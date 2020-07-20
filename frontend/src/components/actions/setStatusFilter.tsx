export const setStatusFilter = (payload:string|boolean) => {
    return {
        type: "SET_STATUS_FILTER",
        payload
    }
}