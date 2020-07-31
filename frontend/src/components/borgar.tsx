import * as React from 'react'
import { motion } from 'framer-motion'

const borgarVariant = {
    initial: {
        x: '100vw'
    },
    animate: {
        transition: {
            duration: 0.5,
            when: "beforeChildren",
            staggerChildren: 0.1
        },
        x: 0
    },
    exit: {
        duration: 0.5,
        x: '100vw'
    }
}

export const Borgar = () => 
    <motion.article variants={borgarVariant} initial='initial' animate='animate' exit='exit' className='borgarBackground'>
        <div className='borgar'>
            <section className="userMinSection">
                <figure className='imgHolder'></figure>
                <div className='userInfo'>
                    <h1>User Name</h1>
                    <article>
                        <p>progress:</p>
                        <div className="progressStatus">
                            <div className='actuallProgress'>30%</div>
                        </div>
                    </article>
                </div>
            </section>
            <h1 className='h1Filters'>Filters</h1>
            <section className="filtersTiles">
                Game Version
            </section>
                <ul>
                    <li>Red</li>
                    <li>Blue</li>
                </ul>
            <section className="filtersTiles"></section>
            <section className="filtersTiles"></section>
            <section className="filtersTiles"></section>
        </div>
    </motion.article>
