import * as React from 'react'
import { motion } from 'framer-motion'
import { useHistory } from "react-router-dom";

const buttonVariant = {
    hover: {
        scale: 1.3,
        boxShadow: '0px 0px 15px -1px rgba(255,255,255,1)',
        transition: {
            duration: 0.4
        }
    },
    onClick: {
        scale: 1.3,
        transition: {
            duration: 0.4
        }
    }
}

const pVariant = {
    begginingPosition: {
        x: '50vw'
    },
    animateTo: {
        x: 0,
        transition: {
            type: 'spring',
            delay: 1
        },
    },
}

export const VisitHomePage:React.FC = () => {
    const history = useHistory()
    return(
        <motion.main exit={{x: '-100vw'}} transition={{duration: 0.5}} className="visitMain">
            <section className="welcome">
                <motion.h1 variants={pVariant} initial={{x: '-50vw'}} animate="animateTo">Welcome to pokecharm</motion.h1>
            </section>
            <section className="functional">
                <motion.div variants={pVariant} initial='begginingPosition' animate='animateTo'>
                    <p>Free web application which can help you menage caught pokemons (ex. to get shiny charm) including shinies</p>
                    <motion.button onClick={() => history.push('/login')} variants={buttonVariant} whileHover='hover'>Login</motion.button>
                    <motion.button variants={buttonVariant} whileHover='hover'>Register</motion.button>
                </motion.div>
            </section>
        </motion.main>
    )}