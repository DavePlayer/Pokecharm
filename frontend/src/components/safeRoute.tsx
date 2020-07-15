import * as React from 'react'
import { Redirect, Route } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { combinedReducers } from './reducers/combined'
import { useEffect } from 'react'
import { loadUserData } from './actions/loadUserData'
import { motion } from 'framer-motion'

type Props = {
    component: React.ReactNode;
    path: string;
}

export const SafeRoute:React.FC<Props> = ({component, path}) => {
    const user = useSelector( (combined:combinedReducers) => combined.user)

    return (
        user.isUserLoged === true ? 
            <>{component}</>
            : 
            <Redirect to={{ pathname: '/login', state: { from: path, error: {status: 'error', err: 'Not logged idiot'}}}} />   
    )
}