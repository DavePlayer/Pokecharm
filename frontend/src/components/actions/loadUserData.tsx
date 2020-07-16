import Axios from "axios"

export const loadUserData = () => {
    return (dispatch:any) => {
        const token = localStorage.getItem('token')
        if(token != undefined){
            Axios.get('http://127.0.0.1:7200/auth/test', {headers: {'authorization': token}} )
            .then( (o:any) => {
                console.log('token verify fetched')
                if(o.data.status != 'error'){
                    console.log('token is valid')
                    dispatch({type: 'LOAD_USER_DATA' ,payload :{isUserLoged: true, token}})
                } else return dispatch({type: 'LOAD_USER_DATA' ,payload: {isUserLoged: false}})
            })
            .catch( o => {
                localStorage.removeItem('token')
            })
        } else {
            console.log('no token saved')
        }
    }
}