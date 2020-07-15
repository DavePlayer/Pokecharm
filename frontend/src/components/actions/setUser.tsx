import { IUser } from "../reducers/user";

export const setUser = (payload:IUser) => {
    return {
        type: "SET_USER",
        payload: payload
    } 
}