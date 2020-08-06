import * as React from 'react'
import { motion } from 'framer-motion'
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
                        <li className={filters.statusFilter == 'all' ? 'selected' : ''} onClick={(e:any) => {handleBooleanFilters(e, 'status', 'all'); setCanShowFilters(false)}}>All</li>
                        <li className={filters.statusFilter == 'caught' ? 'selected' : ''} onClick={(e:any) => {handleBooleanFilters(e, 'status', 'caught'); setCanShowFilters(false)}}>Caught</li>
                        <li className={filters.statusFilter == 'uncaught' ? 'selected' : ''} onClick={(e:any) => {handleBooleanFilters(e, 'status', 'uncaught'); setCanShowFilters(false)}}>Uncaught</li>
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
                        <li className={filters.shineHelper ? 'selected' : ''} onClick={(e:any) => {handleBooleanFilters(e, 'shiny', true); setCanShowShinyHelper(false)}}>On</li>
                        <li className={filters.shineHelper ? '' : 'selected'} onClick={(e:any) => {handleBooleanFilters(e, 'shiny', false); setCanShowShinyHelper(false)}}>Off</li>
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
                    </ul>
                }
            </div>
        </motion.article>
    )}
