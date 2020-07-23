import * as React from 'react'
import { Logo } from './logo'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import Axios, { AxiosResponse } from 'axios'
import { filterPokedexGameGroup } from '../filterPokedexes'
import { useDispatch, useSelector } from 'react-redux'
import { changeGameVersion } from './actions/changeGameVersion'
import { changePokedexId } from './actions/changePokedex'
import { combinedReducers } from './reducers/combined'
import { setStatusFilter } from './actions/setStatusFilter'
import { setShinyHelper } from './actions/setShinyHelper'
import { changeNameFilter } from './actions/changenamefilter'

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

const ulVariant = {
    initial: {
        y: '-20vh',
    },
    animate: {
        y: 0,
        transition: {
            duration: 1
        }
    },
    exit: {
        y: '-20vh',
        transition: {
            duration: 0.5
        }
    }
}

export const Header:React.FC<Iprops> = (props) => {
    const [gameVersions, setGameVersions] = useState<Array<{name: string, url: string}>>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)    
    const [pokedexes, setPokedexes] = useState<Array<{name: string, url: string}>>([])    
    const dispatch = useDispatch()
    const filters = useSelector( (combined:combinedReducers) => combined.filters )
    const [timeoutState, setTimeoutState] = useState<any>(0)
    const [nameFilter, setNameFilter] = useState<string>('')

    useEffect(() => {
        setIsLoading(true)
        console.log(props.path.pathname)
        Axios.get('https://pokeapi.co/api/v2/version/?limit=1000')
            .then( (o:AxiosResponse) => {
                console.log(o.data)
                setGameVersions(o.data.results)
            }).finally( () => {
                const dexIndex:number = filterPokedexGameGroup(filters.gameVersion)
                console.log(dexIndex)
                Axios.get(`https://pokeapi.co/api/v2/version-group/${dexIndex}`)
                .then( o => {
                    console.log(o.data.pokedexes)
                    setPokedexes(o.data.pokedexes)
                })
                .finally( () => {
                    setIsLoading(false)
                })
            })
    }, [])

    const handleSelectGame = (e:any, index:number) => {
        const lis = document.querySelectorAll('.gameVersions > li')
        Array.prototype.map.call(lis, (o:any) => {
            o.setAttribute('class', '')
        })
        e.target.classList += 'selected'
        dispatch(changeGameVersion(index+1))

        const dexIndex:number = filterPokedexGameGroup((index + 1))
        console.log('dex index', dexIndex, ' ', index + 1)
        Axios.get(`https://pokeapi.co/api/v2/version-group/${dexIndex}`)
        .then( o => {
            setPokedexes(o.data.pokedexes)
            dispatch(changePokedexId(o.data.pokedexes[0].name))
        })
    }
    const handleSelectDex = (e:any, name:string) => {
        const lis = document.querySelectorAll('.Dexes > li')
        Array.prototype.map.call(lis, (o:any) => {
            o.setAttribute('class', '')
        })
        e.target.classList += 'selected'
        dispatch(changePokedexId(name))
    }

    const handleBooleanFilters = (e:any, filtertype:string, set:boolean|string) => {
        if(filtertype == 'status'){
            const lis = document.querySelectorAll('.statusFilter > li')
            Array.prototype.map.call(lis, (o:any) => {
                o.setAttribute('class', '')
            })
            e.target.classList += 'selected'
            dispatch(setStatusFilter(set))
        } else {
            const lis = document.querySelectorAll('.shinyHelper > li')
            Array.prototype.map.call(lis, (o:any) => {
                o.setAttribute('class', '')
            })
            e.target.classList += 'selected'
            dispatch(setShinyHelper(set))
        }
    }

    const handleNameFiltering = (e:any) => {
        const value = e.target.value
        setNameFilter(value)
        if(timeoutState) clearTimeout(timeoutState);
        setTimeoutState(setTimeout(() => {
            console.log(value)
            dispatch(changeNameFilter(value))
        }, 800))
    }

    return (
        <motion.header initial={{y: '-50vh'}} animate={{y: 0}} transition={{duration: 0.6}} className="mainHeader">
            <section style={/[/]pokecharm*/.test(props.path.pathname) ? {flexBasis: '20%'}: {flexBasis: '30%'}} className="logoHolder">
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
                <AnimatePresence exitBeforeEnter>
                    {props.path.pathname == '/pokecharm' &&
                        <>
                            <motion.section className="filters" key={1} variants={ulVariant} animate='animate' initial='initial' exit='exit'>
                                <ul>
                                    <li>Game Version
                                        <ol className='gameVersions'>
                                            {
                                                !isLoading && gameVersions.length > 0 ? 
                                                    gameVersions.map( (o, i:number) => {
                                                        return(
                                                            i == 0 ?
                                                            <li className='selected' onClick={(e) => handleSelectGame(e, i)} key={o.name}>{o.name}</li>
                                                            :
                                                            <li onClick={(e) => handleSelectGame(e, i)} key={o.name}>{o.name}</li>
                                                        )
                                                    })
                                                :
                                                    <li>nie działa</li>
                                            }
                                        </ol>
                                    </li>
                                    <li>Status Filter
                                        <ol className='statusFilter'>
                                            <li className='selected' onClick={(e:any) => handleBooleanFilters(e, 'status', 'all')}>All</li>
                                            <li onClick={(e:any) => handleBooleanFilters(e, 'status', 'caught')}>Caught</li>
                                            <li onClick={(e:any) => handleBooleanFilters(e, 'status', 'uncaught')}>Uncaught</li>
                                        </ol>
                                    </li>
                                    <li>Shiny Helper
                                        <ol className='shinyHelper'>
                                            <li onClick={(e:any) => handleBooleanFilters(e, 'shiny', true)}>On</li>
                                            <li className='selected' onClick={(e:any) => handleBooleanFilters(e, 'shiny', false)}>Off</li>
                                        </ol>
                                    </li>
                                    <li>Pokedex
                                        <ol className='Dexes'>
                                            {
                                                !isLoading && pokedexes.length > 0 ? 
                                                pokedexes.map( (o, i:number) => {
                                                    return(
                                                        i == 0 ?
                                                        <li className='selected' onClick={(e) => handleSelectDex(e, o.name)} key={o.name}>{o.name}</li>
                                                        :
                                                        <li onClick={(e) => handleSelectDex(e, o.name)} key={o.name}>{o.name}</li>
                                                    )
                                                })
                                            :
                                                <li>nie działa</li>
                                            }
                                        </ol>
                                    </li>
                                </ul>
                            </motion.section>
                            <motion.section className='nameFilter' key={2} variants={ulVariant} animate='animate' initial='initial' exit='exit'>
                                <input onChange={(e) => handleNameFiltering(e)} value={nameFilter} type="text" placeholder='Type to filter names'/>
                            </motion.section>
                        </>
                    }
                </AnimatePresence>
        </motion.header>
    )
}