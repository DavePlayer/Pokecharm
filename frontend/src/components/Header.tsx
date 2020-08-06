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
import { logoutUser } from './actions/logoutUser'
import { useHistory, useLocation } from 'react-router'
import { filter } from 'lodash'
import { getGameNameById } from '../getGameNameById'
import { changeFiltersDisplayState } from './actions/changeFiltersDisplayState'
import { Borgar } from './borgar'

interface Iprops {
    path?: any,
    canLoadHeader?: boolean
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
    const [showBurger, setShowBurger] = useState<boolean>(false)
    const [nameFilter, setNameFilter] = useState<string>('')
    const [screenSize, setScreenSize] = useState(window.innerWidth)
    const user = useSelector( (combined:combinedReducers) => combined.user)
    const canShowFilters = useSelector( (combined:combinedReducers) => combined.canShowFilters)
    const didFetch = useSelector( (combined:combinedReducers) => combined.didFetch)
    const history = useHistory()
    const location = useLocation()

    useEffect(() => {
        window.addEventListener("resize", () => {setScreenSize(window.innerWidth); console.log(window.innerWidth)});
        setIsLoading(true)
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

    const handleOpeningBurger = () => {
        setShowBurger(prev => {
            console.log('dziala burger')
            if(prev == true)
                document.body.style.overflow="auto" 
            else 
                document.body.style.overflow="hidden" 
            return !prev
        })
    }

    return (
        <motion.header initial={{y: '-50vh'}} animate={{y: 0}} transition={{duration: 0.6}} className="mainHeader">
            <section style={/[/]pokecharm*/.test(props.path.pathname) ? ( screenSize <= 981 ? {flexGrow: 1} : {flexBasis: '20%'} ) : ( screenSize <= 981 ? {flexGrow: 1} : {flexBasis: '34%'})} className="logoHolder">
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
                { (canShowFilters && screenSize >= 981) ?
                    // <motion.div variants={ulVariant} exit='exit' animate='animate' initial='initial'>
                    <>
                        <section className="filters" key={1}>
                            <ul>
                                <li>Game Version
                                    <ol className='gameVersions'>
                                        {
                                            !isLoading && gameVersions.length > 0 ? 
                                                gameVersions.map( (o, i:number) => {
                                                    return(
                                                        o.name == getGameNameById(filters.gameVersion) ?
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
                                        <li className={filters.statusFilter == 'all' ? 'selected' : ''} onClick={(e:any) => handleBooleanFilters(e, 'status', 'all')}>All</li>
                                        <li className={filters.statusFilter == 'caught' ? 'selected' : ''} onClick={(e:any) => handleBooleanFilters(e, 'status', 'caught')}>Caught</li>
                                        <li className={filters.statusFilter == 'uncaught' ? 'selected' : ''} onClick={(e:any) => handleBooleanFilters(e, 'status', 'uncaught')}>Uncaught</li>
                                    </ol>
                                </li>
                                <li>Shiny Helper
                                    <ol className='shinyHelper'>
                                        <li className={filters.shineHelper ? 'selected' : ''} onClick={(e:any) => handleBooleanFilters(e, 'shiny', true)}>On</li>
                                        <li className={filters.shineHelper ? '' : 'selected'} onClick={(e:any) => handleBooleanFilters(e, 'shiny', false)}>Off</li>
                                    </ol>
                                </li>
                                <li>Pokedex
                                    <ol className='Dexes'>
                                        {
                                            !isLoading && pokedexes.length > 0 ? 
                                            pokedexes.map( (o, i:number) => {
                                                return(
                                                    o.name == filters.pokedex ?
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
                        </section>
                        <section className='nameFilter' key={2}>
                            <input onChange={(e) => handleNameFiltering(e)} value={nameFilter} type="text" placeholder='Type to filter names'/>
                        </section>
                        <section className="profileMenu">
                            <span className="material-icons account">
                                account_circle
                            </span>
                            <p>{user.name}</p>
                            <ul>
                                <li>Profile</li>
                                <li onClick={() => {dispatch(changeFiltersDisplayState(false)); history.push('/'); setTimeout(() => {dispatch(logoutUser())},1500)}} className='logout'>
                                    <span className="material-icons">
                                        power_settings_new
                                    </span>
                                    Logout
                                </li>
                            </ul>
                        </section>
                    </>
                    :
                        (canShowFilters && screenSize <= 981) && 
                        <>
                            <AnimatePresence>
                                <section className='burgerHolder' onClick={() => handleOpeningBurger()}><span className="material-icons hamburger">menu</span></section>
                                {
                                    didFetch &&
                                    <section className='nameFilter' key={2}>
                                        <input onChange={(e) => handleNameFiltering(e)} value={nameFilter} type="text" placeholder='Type to filter names'/>
                                    </section>
                                }
                                {
                                    showBurger &&
                                        <Borgar key={1} handleOpeningBurger={() => handleOpeningBurger()} />
                                }
                            </AnimatePresence>
                        </>
                        
                   /* </motion.div> */
                }
        </motion.header>
    )
}