import * as React from 'react'
import { PokemonBlock } from './pokemonBlock'
import { useSelector, useDispatch } from 'react-redux'
import { IPokemon } from './reducers/pokemons'
import { combinedReducers } from './reducers/combined'
import { motion, AnimatePresence, useViewportScroll } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Footer } from './footer'
import { fetchPokemons } from './actions/fetch_pokemons'
import axios from 'axios'
import { Waypoint } from 'react-waypoint'
import { changeFetchStatus } from './actions/changeFetchStatus'
import { loadUserData } from './actions/loadUserData'
import * as _ from 'lodash'
import { FilterState } from './reducers/filters'
import { getGameNameById } from '../getGameNameById'

const spinnerVariant = {
    animate: {
        rotate: 360,
        transition: {
            loop: Infinity,
            duration: 1,
            ease: 'linear'
        }
    },
}
const loadingVariant = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 0.3,
        }
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.7,
        }
    }
}

const delayVariant = {
    initial: {
        opacity: 0,
        beforeChildren: true
    },
    animate: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            //delayChildren: 0.3
        }
    },
    exit: {
        opacity: 0,
    }
}

export const HomePage = () => {
    const pokemons:Array<IPokemon> = useSelector( (o:combinedReducers) => o.pokemons)
    const didFetch:boolean = useSelector( (o:combinedReducers) => o.didFetch )
    const [isLoading, setIsLoading] = useState(true)
    const [lastElement, setLastElement] = useState(40)
    const [filtredPokemons, setFiltredPokemons] = useState(pokemons)
    const dispatch = useDispatch()
    const filters: FilterState = useSelector( (combined:combinedReducers) => combined.filters)
    const user = useSelector( (combined:combinedReducers) => combined.user)

    useEffect(() => {
        const CancelToken = axios.CancelToken;
        const source = CancelToken.source();
        dispatch(loadUserData())
        if( didFetch == false ){
            setIsLoading(true)
            setTimeout(() => {
                axios.get('https://pokeapi.co/api/v2/pokedex/1/', { cancelToken: source.token })
                    .then( (o:any) => {
                        axios.get('http://10.0.0.26:7200/data/getCatchStatus', {params: {gameVersion: 'red', pokedex: 'kanto'}, headers: {authorization: user.token}})
                        .then( (data:any) => {
                            if(data.status = 'data fetched'){
                                o.data.pokemon_entries.map((o:any) => {
                                    let newPokemon:IPokemon = {
                                        id: o.entry_number,
                                        name: o.pokemon_species.name,
                                        status: 'uncaught',
                                        imgUrl: `https://pokeres.bastionbot.org/images/pokemon/${o.entry_number}.png`,
                                        details: o.pokemon_species.url
                                    }
                                    dispatch(fetchPokemons({
                                        id: o.entry_number,
                                        name: o.pokemon_species.name,
                                        status: 'uncaught',
                                        imgUrl: `https://pokeres.bastionbot.org/images/pokemon/${o.entry_number}.png`,
                                        details: o.pokemon_species.url
                                    }))
                                    setFiltredPokemons( prev => {
                                        const test3 = data.data.data.filter( (oo:any) => {
                                            if(oo.pokemonName == newPokemon.name)
                                                return oo
                                        })
                                        if(test3.length > 0){
                                            newPokemon.status = test3[0].normalStatus
                                        }
                                        if(prev.length < 151)
                                            return [...prev, newPokemon]
                                        else
                                            return prev
                                    })
                                })
                                // const test3 = filtredPokemons.map( pok => {
                                //     const current = data.data.filter( (oo:any) => oo.name == pok.name ? oo : {normalStatus: 'uncaught'})
                                //     return pok.status = current[0].normalStatus
                                // })
                                // console.log(filtredPokemons, test3)
                                //setFiltredPokemons(test3)
                            }
                        })                        
                    })
                    .finally( () => {
                        setIsLoading(false)
                        dispatch(changeFetchStatus(true))
                        source.cancel()
                    })
            }, 3000)
        }
    }, [])

    useEffect( () => {
        const CancelToken = axios.CancelToken;
        const source = CancelToken.source();
        axios.get('https://pokeapi.co/api/v2/pokedex/?limit=1000', { cancelToken: source.token })
            .then( (o:any) => {
                console.log(o.data.results)
                console.log('xddddddddd')
                const dexxx:any = o.data.results.filter((o:any) => {
                    if(o.name == filters.pokedex)
                    return o
                })
                console.log(dexxx, filters.pokedex)
                axios.get(dexxx[0].url)
                .then( (o:any) => {
                    axios.get('http://10.0.0.26:7200/data/getCatchStatus', {params: {gameVersion: getGameNameById(filters.gameVersion), pokedex: filters.pokedex}, headers: {authorization: user.token}})
                    .then( (o3:any) => {
                        console.log('o', o)
                        const test = pokemons.filter( (o2:IPokemon) => {
                                const test2 = o.data.pokemon_entries.filter( (cd:any) => _.includes(cd.pokemon_species, o2.name))
                                if(test2.length > 0){
                                    if(o3.data.data.length > 0){                                   
                                        const test3 = o3.data.data.filter( (oo:any) => {
                                            if(oo.pokemonName == o2.name)
                                                return oo
                                        })
                                        if(test3.length > 0)
                                            o2.status = test3[0].normalStatus
                                        else 
                                        o2.status = 'uncaught'
                                        console.log(o2.status)
                                    } else {
                                        o2.status = 'uncaught'
                                    }
                                    return o2
                                }
                            }
                        )
                        console.log('test', test)
                        setFiltredPokemons(test)
                    })
                }).finally(() => {
                    console.log('MAKARENA!!!!', isLoading)
                    source.cancel();
                })
            })
    },[filters])

    const loadMore = (i:number) => {
        if(i == lastElement-5){
            setLastElement(prev => prev += 20)
        }
    }
    return (
        <motion.div style={{position: 'relative', zIndex: 2}} exit={{opacity: 0}} transition={{duration: 1}}>
            <AnimatePresence exitBeforeEnter>
                {
                    (isLoading && didFetch==false) ?
                    <motion.section 
                        variants={loadingVariant} 
                        key={1}
                        initial='initial' 
                        animate='animate' 
                        className='loadingContainer'
                        exit='exit'
                    >
                        <motion.div className='spinner' variants={spinnerVariant}></motion.div>
                    </motion.section>
                    :
                    <motion.main animate='animate' exit='exit' initial='initial' variants={delayVariant} className="HomePage" key={2}>
                        {
                            filtredPokemons.slice(0,lastElement).map( (o:any, i:number) => {
                                return(
                                    <div key={o.id}>
                                        <Waypoint onEnter={() => loadMore(i)} />
                                        <PokemonBlock key={o.id} imgUrl={o.imgUrl} name={o.name} id={o.id} status={o.status} />
                                    </div>
                                )
                            })
                        }
                        <Footer />
                    </motion.main>
                }
            </AnimatePresence>
        </motion.div>
    )
}