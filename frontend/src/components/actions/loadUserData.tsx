import Axios from "axios"

export const loadUserData = () => {
    return (dispatch:any) => {
        const token = localStorage.getItem('token')
        const userName = localStorage.getItem('user')
        if(token != undefined){
            Axios.get('http://127.0.0.1:7200/auth/test', {headers: {'authorization': token}} )
            .then( (o:any) => {
                console.log('token verify fetched')
                if(o.data.status != 'error'){
                    console.log('token is valid', o)
                    dispatch({type: 'LOAD_USER_DATA' ,payload :{isUserLoged: true, token, name: userName}})
                } else return dispatch({type: 'LOAD_USER_DATA' ,payload: {isUserLoged: false, name: 'Access Denied'}})
            })
            .catch( o => {
                //localStorage.removeItem('token')
                dispatch({type: 'LOAD_USER_DATA' ,payload: {isUserLoged: false, userStatus: o.message, name: 'Access Denied'}})
            })
        } else {
            console.log('no token saved')
            dispatch({type: 'LOAD_USER_DATA' ,payload: {isUserLoged: false, userStatus: 'Token not provided. Login to get new one.', name: 'Access Denied'}})
        }
    }
}