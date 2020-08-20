import * as React from 'react'
import { motion, useSpring } from 'framer-motion'
import { useHistory, Redirect } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { combinedReducers } from './reducers/combined'
import { useState } from 'react'
import Axios from 'axios'
import { setUser } from './actions/setUser'
import { loadUserData } from './actions/loadUserData'
import { changeFiltersDisplayState } from './actions/changeFiltersDisplayState'

export const formVariant = {
    initial: {
        x: window.innerWidth >= 981 ? '50vw' : '100vw'
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
        x: window.innerWidth >= 981 ? '-70vw' : '-120vw',
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
        if(email.length == 0 || password.length == 0){
            setError('Fill data first baka!')
        } else {
            Axios.get('http://10.0.0.26:7200/auth/login', {params: {email, password}})
            .then( o => {
                if(o.data.status != 'error'){
                    setError('')
                    console.log(o.data)
                    dispatch(setUser({isUserLoged: true, token:o.data.token, name: o.data.name}))
                } else {
                    setError(`${o.data.status}: ${o.data.err}`)
                }
            }) .catch (err => {
                setError(err.message)
            })
        }
    }
    React.useEffect(() => {
        if(props.location.state)
            setError(user.userStatus)
        dispatch(loadUserData())
        dispatch(changeFiltersDisplayState(false))
    }, [])

    React.useEffect(() => {
        if(props.location.state)
            setError(user.userStatus)
    }, [user.userStatus])

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
                <p>Forgot mail or password? Reset <span className='blue' onClick={() => history.push('/forgotPassword')}>Here</span></p>
                <p className='error' >{error}</p>
            </motion.form>
            <motion.section variants={formVariant} exit='exit'  initial='initial' animate='animate' className='buttonHolder'>
                <button onClick={() => history.push('/')}>Go back</button>
                <button form='loginFrom'>Login</button>
            </motion.section>
        </main>
    )
}