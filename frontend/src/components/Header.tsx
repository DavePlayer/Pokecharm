import * as React from 'react'
import { Logo } from './logo'
import { motion, AnimatePresence } from 'framer-motion'

interface Iprops {
    path?: any
}


const h1Variant:any = {
    initial: {
        rotateY: 90
    },
    animate: {
        rotateY: 0,
        transition: {
            duration: 1
        }
    },
    exit: {
        rotateY: 90,
        transition: {
            duration: 1,
        }
    }
}

export const Header:React.FC<Iprops> = (props) => {
    console.log(props.path)
    return (
        <motion.header initial={{y: '-50vh'}} animate={{y: 0}} transition={{duration: 0.6}} className="mainHeader">
            <section className="logoHolder">
                <Logo />
                <AnimatePresence exitBeforeEnter>
                    {
                        /[/]pokecharm*/.test(props.path.pathname) ?
                        <motion.h1 key={1} variants={h1Variant} exit='exit' animate='animate' initial='initial'>Pokecharm</motion.h1>
                        :
                        <motion.h1 key={2} variants={h1Variant} exit='exit' animate='animate' initial='initial'>Omega Applications</motion.h1>
                    }
                </AnimatePresence>
            </section>
            <section className="filters">
                <ul>
                    <li>Game Version
                        <ol>
                            <li>xd</li>
                            <li>xd</li>
                            <li>xd</li>
                        </ol>
                    </li>
                    <li>Status Filter</li>
                    <li>Shiny Helper</li>
                    <li>Pokedex</li>
                </ul>
            </section>
        </motion.header>
    )
}