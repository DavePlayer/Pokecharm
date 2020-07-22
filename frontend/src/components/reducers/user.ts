import Axios from "axios"

export interface IUser {
    isUserLoged: boolean,
    token?: string,
    userStatus?: any
}

export const user = (state:IUser={isUserLoged: false, userStatus: 'Invalid token. returned error 403: Forbiden Access'}, action:any) => {
    switch(action.type){
        case "SET_USER":
            localStorage.setItem('token', `${action.payload.token}`)
            return state = action.payload
        case "LOAD_USER_DATA":
            console.log('loading token from localstorage')
            return state = action.payload
        default:
            return state
    }
}