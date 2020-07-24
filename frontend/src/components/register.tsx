import * as React from 'react'
import { motion } from 'framer-motion'
import { formVariant } from './login'
import { useHistory } from 'react-router-dom'
import { useState } from 'react'
import Axios from 'axios'
import { useDispatch } from 'react-redux'
import { setUser } from './actions/setUser'

export const Register = () => {
    const history = useHistory()
    const [phoneNumber, setPhoneNumber] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const dispatch = useDispatch()

    const handlePhone = (e:any) => {
        console.log(e.target.value)
        if(phoneNumber.length == 0){
            setPhoneNumber(`+${e.target.value}`)
        }
        if(e.target.value.length <= 13 && /^[+]\d*$/.test(e.target.value) != false){
                setPhoneNumber(e.target.value)
        }
    }

    const handleSubmit = (e:any) => {
        e.preventDefault()
        console.log(name, email, password)
        if(name.length > 0 && email.length && phoneNumber.length > 0 && password.length){
            Axios.post('http://10.0.0.26:7200/auth/register', {
                type: 'registerData',
                name,
                email,
                phoneNumber,
                password,
                }
            ).then( (o:any) => {
                if(o.data.status == 'error')
                    setError(o.data.err)
                else if (o.data.status == 'Error mf')
                    setError('user already exists')
                else {
                    dispatch(setUser({token: o.data.token, name, isUserLoged: true}))
                    setTimeout(() => {
                        history.push('/pokecharm')
                    }, 200)
                }
                console.log(o)
            })
            .catch( err => {
                throw(err)
            })
        } else {
            setError('Provide data!')
        }
    }

    return (
        <main className='register'>
            <motion.form onSubmit={(e) => handleSubmit(e)} variants={formVariant} exit='exit' initial='initial' animate='animate' action="" method='GET' id='loginFrom'>
                <input onChange={e => setName(e.target.value)} value={name} type="text" placeholder='Name'/>
                <input onChange={e => setEmail(e.target.value)} value={email} type="email" placeholder='E-mail'/>
                <input value={phoneNumber} onChange={(e) => handlePhone(e)} type="text" placeholder='Phone number'/>
                <input onChange={e => setPassword(e.target.value)} value={password} type="password" placeholder='Password'/>
                <p className='error'>{error}</p>
            </motion.form>
            <motion.section variants={formVariant} exit='exit'  initial='initial' animate='animate' className='buttonHolder'>
                <button onClick={() => history.push('/')}>Go back</button>
                <button form='loginFrom'>Login</button>
            </motion.section>
        </main>
    )
}