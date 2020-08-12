import * as React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { getGameNameById } from '../getGameNameById'
import { combinedReducers } from './reducers/combined'
import { useSelector } from 'react-redux'
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
            duration: 0.3,
            staggerChildren: 0.1,
            delayChildren: 0.1
        },
        x: 0
    },
    exit: {
        transition: {
            //delay: 0.5,
            duration: 0.3,
            // staggerChildren: 0.1,
            // staggerDirection: -1
        },
        x: '100vw'
    }
}
const filterVariant = {
    initial: {
        scale: 0
    },
    animate: {
        scale: 1,
        transition: {
            duration: 0.3,
        }
    },
    exit: {
        scale: 0,
    }
}
const ulVariant = {
    initial: {
        height: 0
    },
    animate: {
        height: 'auto',
        transition: {
            duration: 0.3,
        }
    },
    exit: {
        height: 0,
        transition: {
            duration: 0.3,
        }
    }
}
const gameVariant = {
    initial: {
        height: 0
    },
    animate: {
        height: 'auto',
        transition: {
            duration: 1,
        }
    },
    exit: {
        height: 0,
        transition: {
            duration: 1,
        }
    }
}

interface IProps {
    handleOpeningBurger: () => void,
    handleSelectGame: (e:any, index:number) => void,
    handleBooleanFilters: (e:any, filtertype:string, set:boolean|string) => void,
    handleSelectDex: (e:any, name:string) => void,
    isLoading: boolean,
    gameVersions: { name: string; url: string; }[],
    pokedexes: { name: string, url: string }[]
}

export const Borgar:React.FC<IProps> = (props) => {
    const [canShowGameVersions, setCanShowGameVersions] = useState(false)
    const [canShowFilters, setCanShowFilters] = useState(false)
    const [canShowShinyHelper, setCanShowShinyHelper] = useState(false)
    const [canShowPokedexes, setCanShowPokedexes] = useState(false)
    const { pokedexes, isLoading, gameVersions, handleBooleanFilters, handleSelectDex, handleSelectGame} = props
    const filters = useSelector((combined: combinedReducers) => combined.filters)
    return (
        <motion.article variants={borgarVariant} initial='initial' animate='animate' exit='exit' className='borgarBackground'>
            <div onClick={() => props.handleOpeningBurger()} className='return'></div>
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
                <motion.section key={1.11} variants={filterVariant} onClick={() => setCanShowGameVersions(prev => !prev)} className="filtersTiles">
                    <figure><img src={gamePadImg} alt="gamepad"/></figure>
                    <p>Game Version</p>
                    <span style={canShowGameVersions ? {transform: 'rotate(0deg)'} : {transform: 'rotate(180deg)'}} className="material-icons arrow">
                        keyboard_arrow_up
                    </span>
                </motion.section>
                        {
                            canShowGameVersions && 
                            <motion.ul key={1.1} exit='exit' variants={gameVariant}>
                                {
                                    !isLoading && gameVersions.length > 0 ?
                                        gameVersions.map( (o, i:number) => {
                                            return(
                                                o.name == getGameNameById(filters.gameVersion) ?
                                                <li className='selected' onClick={(e) => {handleSelectGame(e, i); setCanShowGameVersions(false)}} key={o.name}>{o.name}</li>
                                                :
                                                <li onClick={(e) => {handleSelectGame(e, i); setCanShowGameVersions(false)}} key={o.name}>{o.name}</li>
                                            )
                                        })
                                    :
                                        <li>nie działa</li>
                                }
                            </motion.ul>   
                        }
                <motion.section key={1.12}  variants={filterVariant} onClick={() => setCanShowFilters(prev => !prev)} className="filtersTiles">
                    <figure><img src={filterImg} alt="filter"/></figure>
                    <p>Filters</p>
                    <span style={canShowFilters ? {transform: 'rotate(0deg)'} : {transform: 'rotate(180deg)'}} className="material-icons arrow">
                        keyboard_arrow_up
                    </span>
                </motion.section>
                {
                    canShowFilters &&
                    <motion.ul key={1.2} variants={ulVariant}>
                        <li className={filters.statusFilter == 'all' ? 'selected' : ''} onClick={(e:any) => {handleBooleanFilters(e, 'status', 'all'); setCanShowFilters(false)}}>All</li>
                        <li className={filters.statusFilter == 'caught' ? 'selected' : ''} onClick={(e:any) => {handleBooleanFilters(e, 'status', 'caught'); setCanShowFilters(false)}}>Caught</li>
                        <li className={filters.statusFilter == 'uncaught' ? 'selected' : ''} onClick={(e:any) => {handleBooleanFilters(e, 'status', 'uncaught'); setCanShowFilters(false)}}>Uncaught</li>
                    </motion.ul>
                }
                <motion.section key={1.13}  variants={filterVariant} onClick={() => setCanShowShinyHelper(prev => !prev)} className="filtersTiles">
                    <figure><img src={starImg} alt="gamepad"/></figure>
                    <p>Shiny Helper</p>
                    <span style={canShowShinyHelper ? {transform: 'rotate(0deg)'} : {transform: 'rotate(180deg)'}} className="material-icons arrow">
                        keyboard_arrow_up
                    </span>
                </motion.section>
                {
                    canShowShinyHelper &&
                    <motion.ul key={1.3} variants={ulVariant}>
                        <li className={filters.shineHelper ? 'selected' : ''} onClick={(e:any) => {handleBooleanFilters(e, 'shiny', true); setCanShowShinyHelper(false)}}>On</li>
                        <li className={filters.shineHelper ? '' : 'selected'} onClick={(e:any) => {handleBooleanFilters(e, 'shiny', false); setCanShowShinyHelper(false)}}>Off</li>
                    </motion.ul>
                }
                <motion.section key={1.14}  variants={filterVariant} onClick={() => setCanShowPokedexes(prev => !prev)} className="filtersTiles">
                    <figure><img src={pokedexImg} alt="gamepad"/></figure>
                    <p>Pokedex</p>
                    <span style={canShowPokedexes ? {transform: 'rotate(0deg)'} : {transform: 'rotate(180deg)'}} className="material-icons arrow">
                        keyboard_arrow_up
                    </span>
                </motion.section>
                {
                    canShowPokedexes &&
                    <motion.ul key={1.4} variants={ulVariant}>
                        {
                            !isLoading && pokedexes.length > 0 ? 
                            pokedexes.map( (o, i:number) => {
                                return(
                                    o.name == filters.pokedex ?
                                    <li className='selected' onClick={(e) => {handleSelectDex(e, o.name); setCanShowPokedexes(false)}} key={o.name}>{o.name}</li>
                                    :
                                    <li onClick={(e) => {handleSelectDex(e, o.name); setCanShowPokedexes(false)}} key={o.name}>{o.name}</li>
                                )
                            })
                        :
                            <li>nie działa</li>
                        }
                    </motion.ul>
                }
            </div>
        </motion.article>
    )}
