import * as React from 'react'
import { motion } from 'framer-motion'
import { useHistory, Redirect } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { combinedReducers } from './reducers/combined'
import { useState } from 'react'
import Axios from 'axios'
import { setUser } from './actions/setUser'
import { loadUserData } from './actions/loadUserData'

export const formVariant = {
    initial: {
        x: '50vw'
    },
    animate: {
        x: 0,
        transition: {
            delay: 0.1,
            type: 'spring',
            stifness: 120,
            damping: 10
        }
    },
    exit: {
        x: '-70vw',
        transition: {
            delay: 0.1,
            duration: 0.7
        }
    }
}

export const Login = (props:any) => {
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const user = useSelector( (combined:combinedReducers) => combined.user)
    const dispatch = useDispatch()

    const handleLogin = (e:any) => {
        e.preventDefault()
        if(email.length == 0 || password.length == 0)
            setError('Fill data first baka!')
        Axios.get('http://10.0.0.26:7200/auth/login', {params: {email, password}})
        .then( o => {
            if(o.data.status != 'error'){
                setError('')
                dispatch(setUser({isUserLoged: true, token:o.data.token}))
            } else {
                setError(`${o.data.status}: ${o.data.err}`)
            }
        })
    }
    React.useEffect(() => {
        if(props.location.state)
            setError(props.location.state.error.err)
            dispatch(loadUserData())
    }, [])

    if (user.isUserLoged == true)
    return (
        <motion.div variants={formVariant} exit='exit' initial='initial' animate='animate'><Redirect to="/pokecharm" push/></motion.div>
    )
    else
    return (
        <main className='register'>
            <motion.form onSubmit={(e) => handleLogin(e)} variants={formVariant} exit='exit' initial='initial' animate='animate' action="" method='GET' id='loginFrom'>
                <input type="email" onChange={ e => setEmail(e.target.value)} placeholder='E-mail'/>
                <input type="password" onChange={ e => setPassword(e.target.value)} placeholder='Password'/>
                <p>Forgot mail or password? Reset <span className='blue'>Here</span></p>
                <p>{error}</p>
            </motion.form>
            <motion.section variants={formVariant} exit='exit'  initial='initial' animate='animate' className='buttonHolder'>
                <button onClick={() => history.push('/')}>Go back</button>
                <button form='loginFrom'>Login</button>
            </motion.section>
        </main>
    )
}