import * as React from 'react'
import { Redirect, Route } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { combinedReducers } from './reducers/combined'
import { useEffect } from 'react'
import { loadUserData } from './actions/loadUserData'
import { motion } from 'framer-motion'
import { IUser } from './reducers/user'

type Props = {
    component: React.ReactNode;
    path: string;
}

export const SafeRoute:React.FC<Props> = ({component, path}) => {

    const dispatch = useDispatch()
    const user = useSelector( (combined:combinedReducers) => combined.user)

    useEffect(() => {
        dispatch(loadUserData())
    }, [])

    if(user.isUserLoged === true)
        return (<>{component}</>)
    else
        return (
            <Redirect to={{ pathname: '/login', state: { from: path, error: {status: 'error', err: 'Not logged idiot'}}}} />   
        )
}