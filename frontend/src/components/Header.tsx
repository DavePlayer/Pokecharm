import * as React from 'react'
import { Logo } from './logo'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import Axios, { AxiosResponse } from 'axios'
import { filterPokedexGameGroup } from '../filterPokedexes'

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
    const [gameVersions, setGameVersions] = useState<Array<{name: string, url: string}>>([])
    const [selectedVersion, setSelectedVersion] = useState<number>(1)
    const [dex, setDex] = useState<number>(1)
    const [isLoading, setIsLoading] = useState<boolean>(false)    
    const [pokedexes, setPokedexes] = useState<Array<{name: string, url: string}>>([])    

    useEffect(() => {
        setIsLoading(true)
        Axios.get('https://pokeapi.co/api/v2/version/?limit=1000')
            .then( (o:AxiosResponse) => {
                console.log(o.data)
                setGameVersions(o.data.results)
            }).finally( () => {
                const dexIndex:number = filterPokedexGameGroup(selectedVersion)
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
        setSelectedVersion(index)

        const dexIndex:number = filterPokedexGameGroup((index + 1))
        console.log('dex index', dexIndex, ' ', index + 1)
        Axios.get(`https://pokeapi.co/api/v2/version-group/${dexIndex}`)
        .then( o => {
            setPokedexes(o.data.pokedexes)
        })
    }
    const handleSelectDex = (e:any, index:number) => {
        const lis = document.querySelectorAll('.Dexes > li')
        Array.prototype.map.call(lis, (o:any) => {
            o.setAttribute('class', '')
        })
        e.target.classList += 'selected'
        setDex(index)
    }

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
                        <ol>
                            <li>On</li>
                            <li>Off</li>
                        </ol>
                    </li>
                    <li>Shiny Helper
                        <ol>
                            <li>On</li>
                            <li>Off</li>
                        </ol>
                    </li>
                    <li>Pokedex
                        <ol className='Dexes'>
                            {
                                !isLoading && pokedexes.length > 0 ? 
                                pokedexes.map( (o, i:number) => {
                                    return(
                                        i == 0 ?
                                        <li className='selected' onClick={(e) => handleSelectDex(e, i)} key={o.name}>{o.name}</li>
                                        :
                                        <li onClick={(e) => handleSelectDex(e, i)} key={o.name}>{o.name}</li>
                                    )
                                })
                            :
                                <li>nie działa</li>
                            }
                        </ol>
                    </li>
                </ul>
            </section>
        </motion.header>
    )
}