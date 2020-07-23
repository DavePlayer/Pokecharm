import Axios from "axios"

export interface IUser {
    isUserLoged: boolean,
    token?: string,
    userStatus?: any,
    name?: string
}

export const user = (state:IUser={isUserLoged: false, userStatus: 'Invalid token. returned error 403: Forbiden Access', name: 'Access Denied'}, action:any) => {
    switch(action.type){
        case "SET_USER":
            localStorage.setItem('token', `${action.payload.token}`)
            localStorage.setItem('user', `${action.payload.name}`)
            return state = action.payload
        case "LOAD_USER_DATA":
            console.log('loading token from localstorage')
            return state = action.payload
        case "LOGOUT_USER":
            localStorage.removeItem('token')
            localStorage.removeItem('user')
            return state = {
                isUserLoged: false, 
                userStatus: 'Invalid token. returned error 403: Forbiden Access', 
                name: 'Access Denied'
            }
        default:
            return state
    }
}