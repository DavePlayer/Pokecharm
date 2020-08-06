import * as React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
const gamePadImg = require('./../../images/gamepad.svg')
const filterImg = require('./../../images/filter.svg')
const pokedexImg = require('./../../images/pokedex.svg')
const starImg = require('./../../images/star.svg')

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

interface IProps {
    handleOpeningBurger: () => void
}

export const Borgar:React.FC<IProps> = (props) => {
    const [canShowGameVersions, setCanShowGameVersions] = useState(false)
    const [canShowFilters, setCanShowFilters] = useState(false)
    const [canShowShinyHelper, setCanShowShinyHelper] = useState(false)
    const [canShowPokedexes, setCanShowPokedexes] = useState(false)
    return (
        <motion.article variants={borgarVariant} initial='initial' animate='animate' exit='exit' className='borgarBackground'>
            <div className='borgar'>
                <section className="userMinSection">
                    <figure className='imgHolder'>
                        <span className="material-icons account">account_circle</span>
                    </figure>
                    <div className='userInfo'>
                        <h1>User Name</h1>
                        <article>
                            <p>progress:</p>
                            <div className="progressStatus">
                                <div className='actuallProgress'>30%</div>
                            </div>
                        </article>
                        <span onClick={() => props.handleOpeningBurger()} className="material-icons close">
                            close
                        </span>
                    </div>
                </section>
                <h1 className='h1Filters'>Filters</h1>
                <section onClick={() => setCanShowGameVersions(prev => !prev)} className="filtersTiles">
                    <figure><img src={gamePadImg} alt="gamepad"/></figure>
                    <p>Game Version</p>
                    <span style={canShowGameVersions ? {transform: 'rotate(0deg)'} : {transform: 'rotate(180deg)'}} className="material-icons arrow">
                        keyboard_arrow_up
                    </span>
                </section>
                {
                    canShowGameVersions &&
                        <ul>
                            <li>Red</li>
                            <li>Blue</li>
                        </ul>
                }
                <section onClick={() => setCanShowFilters(prev => !prev)} className="filtersTiles">
                    <figure><img src={filterImg} alt="filter"/></figure>
                    <p>Filters</p>
                    <span style={canShowFilters ? {transform: 'rotate(0deg)'} : {transform: 'rotate(180deg)'}} className="material-icons arrow">
                        keyboard_arrow_up
                    </span>
                </section>
                {
                    canShowFilters &&
                    <ul>
                        <li>Caught</li>
                        <li>Uncaught</li>
                    </ul>
                }
                <section onClick={() => setCanShowShinyHelper(prev => !prev)} className="filtersTiles">
                    <figure><img src={starImg} alt="gamepad"/></figure>
                    <p>Shiny Helper</p>
                    <span style={canShowShinyHelper ? {transform: 'rotate(0deg)'} : {transform: 'rotate(180deg)'}} className="material-icons arrow">
                        keyboard_arrow_up
                    </span>
                </section>
                {
                    canShowShinyHelper &&
                    <ul>
                        <li>On</li>
                        <li>Off</li>
                    </ul>
                }
                <section onClick={() => setCanShowPokedexes(prev => !prev)} className="filtersTiles">
                    <figure><img src={pokedexImg} alt="gamepad"/></figure>
                    <p>Pokedex</p>
                    <span style={canShowPokedexes ? {transform: 'rotate(0deg)'} : {transform: 'rotate(180deg)'}} className="material-icons arrow">
                        keyboard_arrow_up
                    </span>
                </section>
                {
                    canShowPokedexes &&
                    <ul>
                        <li>Kanto</li>
                    </ul>
                }
            </div>
        </motion.article>
    )}
