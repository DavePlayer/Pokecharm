import * as React from 'react'
import { motion } from 'framer-motion'
import { formVariant } from './login'
import { useState } from 'react'
import axios from 'axios'

export const ForgotPassword = () => {
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [error, setError] = useState('')

    const submit = (e:any) => {
        e.preventDefault()
        console.log(email)
        axios({
            method: 'post',
            url: 'http://10.0.0.26:7200/auth/forgotPassword',
            data: {
              email
            }
          })
        .then( res => {
            console.log(res.data)
            if(res.data.status != 'error') {
                setMessage(`Email send to ${email}`)
            } else {
                setError(res.data.err)
            }
        })
        .catch (err => {
            setError(err)
        })
    }

    return (
        message.length == 0 ?
        <main className='register'>
            <motion.form onSubmit={e => submit(e)} variants={formVariant} exit='exit' initial='initial' animate='animate' action="" method='GET' id='forgotForm'>
                <h1>We will send you email with a link to password change</h1>
                <input type="email" onChange={ e => setEmail(e.target.value)} placeholder='E-mail'/>
                <p className='error' >{error}</p>
            </motion.form>
            <motion.section variants={formVariant} exit='exit'  initial='initial' animate='animate' className='buttonHolder'>
                <button form='forgotForm'>Send Email</button>
            </motion.section>
        </main>
        :
        <main className='register'>
            <motion.form variants={formVariant} exit='exit' initial='initial' animate='animate' action="" method='GET' id='forgotForm'>
        <h1>{message}</h1>
            </motion.form>
        </main>
    )
}