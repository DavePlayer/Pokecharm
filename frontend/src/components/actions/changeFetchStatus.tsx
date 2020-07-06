
export const changeFetchStatus = (payload:boolean) => {
    return {
        type: "CHANGE_DID_FETCH",
        payload
    }
}