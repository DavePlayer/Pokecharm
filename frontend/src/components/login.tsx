import * as React from 'react'
import { motion } from 'framer-motion'
import { useHistory } from 'react-router-dom'

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

export const Login = () => {
    const history = useHistory()

    const handleLogin = (e:any) => {
        e.preventDefault()
        history.push('/pokecharm')
    }
    return (
        <main className='register'>
            <motion.form onSubmit={(e) => handleLogin(e)} variants={formVariant} exit='exit' initial='initial' animate='animate' action="" method='GET' id='loginFrom'>
                <input type="email" placeholder='E-mail'/>
                <input type="password" placeholder='Password'/>
                <p>Forgot mail or password? Reset <span className='blue'>Here</span></p>
                <p>or</p>
                <p>google</p>
            </motion.form>
            <motion.section variants={formVariant} exit='exit'  initial='initial' animate='animate' className='buttonHolder'>
                <button onClick={() => history.push('/')}>Go back</button>
                <button form='loginFrom'>Login</button>
            </motion.section>
        </main>
    )
}