import * as React from 'react'
import { motion } from 'framer-motion'
import { formVariant } from './login'
import { useHistory } from 'react-router-dom'
import { useState } from 'react'

export const Register = () => {
    const history = useHistory()
    const [phoneNumber, setPhoneNumber] = useState('+48')

    const handlePhone = (e:any) => {
        console.log(e.target.value)
        if(e.target.value.length <= 13 && /^[+]\d*$/.test(e.target.value) != false){
                setPhoneNumber(e.target.value)
        }
    }

    const handleSubmit = (e:any) => {
        console.log(e)
    }

    return (
        <main className='register'>
            <motion.form onSubmit={(e) => handleSubmit(e)} variants={formVariant} exit='exit' initial='initial' animate='animate' action="" method='GET' id='loginFrom'>
                <input type="text" placeholder='Name'/>
                <input type="email" placeholder='E-mail'/>
                <input value={phoneNumber} onChange={(e) => handlePhone(e)} type="text" placeholder='Phone number'/>
                <input type="password" placeholder='Password'/>
            </motion.form>
            <motion.section variants={formVariant} exit='exit'  initial='initial' animate='animate' className='buttonHolder'>
                <button onClick={() => history.push('/')}>Go back</button>
                <button form='loginFrom'>Login</button>
            </motion.section>
        </main>
    )
}