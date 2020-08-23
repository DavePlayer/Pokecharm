import * as React from 'react'
import { motion } from 'framer-motion'
import { formVariant } from './login'
import { useParams } from 'react-router'
import Axios from 'axios'

export const ResetPassword = () => {
    const [newPassword, setNewPassword] = React.useState<String>('')
    const [repeatPassword, setRepeatPassword] = React.useState<String>('')
    const [error, seterror] = React.useState('')
    const [canChangePassword, setCanChangePassword] = React.useState<boolean>(false)
    const params: {token: string} = useParams()

    React.useEffect(() => {
       Axios.get('http://10.0.0.26:7200/auth/checkResetToken', {headers: {authorization: params.token}})
       .then( (data) => {
           console.log(data.data)
           if(data.data.status != 'error'){
                setCanChangePassword(true)
           } else {
                setCanChangePassword(false)
           }
       } )
    }, [])

    const submit = (e: React.FormEvent) => {
        e.preventDefault()

        if(newPassword != repeatPassword){
            seterror('Passwords are not exact')
        } else {
            alert('password changed')
        }
    }

    return (
        <>
            {
                canChangePassword ? 
                    <main className='register'>
                        <motion.form onSubmit={ (e: React.FormEvent) => submit(e)} variants={formVariant} exit='exit' initial='initial' animate='animate' action="" method='GET' id='forgotForm'>
                            <h1>Set new password</h1>
                            <input type="password" onChange={ e => setNewPassword(e.target.value)} placeholder='New password'/>
                            <input type="password" onChange={ e => setRepeatPassword(e.target.value)} placeholder='Repeat password'/>
                            <p className='error' >{error}</p>
                        </motion.form>
                        <motion.section variants={formVariant} exit='exit'  initial='initial' animate='animate' className='buttonHolder'>
                            <button form='forgotForm'>Send Email</button>
                        </motion.section>
                    </main>
                    :
                    <main className='register'>
                        <form>
                            <h1>Can't change password due to lack of token or having expired one</h1>
                        </form>
                    </main>
            }
        </>
    )
}