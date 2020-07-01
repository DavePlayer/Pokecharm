import * as React from 'react'
import {Route, Switch, useLocation} from 'react-router-dom'
import { Header } from './Header'
import { VisitHomePage } from './visitHomePage'
import { Glow } from './Glow'
import { AnimatePresence } from 'framer-motion'
import { motion } from 'framer-motion'
import { Login } from './login'
import { Register } from './register'


export const App = () => {
    const location = useLocation()
    return(
        <>
            <motion.div initial={{y: '-50vh'}} animate={{y: 0}} transition={{duration: 0.6}}>
                <Header  isLoadedApp={false} />
            </motion.div>
            <AnimatePresence exitBeforeEnter>
                <Switch location={location} key={location.key}>
                    <Route exact path='/' render={() => <WelcomeWrapper children={<VisitHomePage />} />} />
                    <Route exact path='/login' render={() => <WelcomeWrapper children={<Login />}/>} />
                    <Route exact path='/register' render={() => <WelcomeWrapper children={<Register />}/>} />
                </Switch>
            </AnimatePresence>
        </>
    )
}

interface IPropHolder {
    children?: React.ReactNode,
    isLoadedApp?: boolean,
}

const WelcomeWrapper:React.FC = (props:IPropHolder) => (
    <>
        {
            (props.children && props.children)
        }
        <Glow />
    </>
)