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
import { changeFiltersDisplayState } from './actions/changeFiltersDisplayState'

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

let delayVariant = {
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
    const [filtredPokemons, setFiltredPokemons] = useState(pokemons)
    const [displayPokemons, setDisplayPokemons] = useState(pokemons)
    const [lastElement, setLastElement] = useState(40)
    const dispatch = useDispatch()
    const filters: FilterState = useSelector( (combined:combinedReducers) => combined.filters)
    const user = useSelector( (combined:combinedReducers) => combined.user)

    useEffect(() => {
        dispatch(changeFiltersDisplayState(true))
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
                                        normalStatus: 'uncaught',
                                        shinyStatus: 'uncaught',
                                        imgUrl: `https://pokeres.bastionbot.org/images/pokemon/${o.entry_number}.png`,
                                        details: o.pokemon_species.url
                                    }
                                    dispatch(fetchPokemons({
                                        id: o.entry_number,
                                        name: o.pokemon_species.name,
                                        normalStatus: 'uncaught',
                                        shinyStatus: 'uncaught',
                                        imgUrl: `https://pokeres.bastionbot.org/images/pokemon/${o.entry_number}.png`,
                                        details: o.pokemon_species.url
                                    }))
                                    setFiltredPokemons( prev => {
                                        const test3 = data.data.data.filter( (oo:any) => {
                                            if(oo.pokemonName == newPokemon.name)
                                                return oo
                                        })
                                        if(test3.length > 0){
                                            newPokemon.normalStatus = test3[0].normalStatus
                                            newPokemon.shinyStatus = test3[0].shinyStatus
                                        }
                                        if(prev.length < 151)
                                            return [...prev, newPokemon]
                                        else
                                            return prev
                                    })
                                    setDisplayPokemons( prev => {
                                        const test3 = data.data.data.filter( (oo:any) => {
                                            if(oo.pokemonName == newPokemon.name)
                                                return oo
                                        })
                                        if(test3.length > 0){
                                            newPokemon.normalStatus = test3[0].normalStatus
                                            newPokemon.shinyStatus = test3[0].shinyStatus
                                        }
                                        if(prev.length < 151)
                                            return [...prev, newPokemon]
                                        else
                                            return prev
                                    })
                                })
                            }
                        }).catch(err => console.log('error: ', err))                       
                    })
                    .finally( () => {
                        setIsLoading(false)
                        dispatch(changeFetchStatus(true))
                        source.cancel()
                    })
            }, 1500)
        }
        setTimeout(() => {
            delayVariant.animate.transition.staggerChildren == 0.0
        }, 5000);
    }, [])

    useEffect( () => {
        const CancelToken = axios.CancelToken;
        const source = CancelToken.source();
        axios.get('https://pokeapi.co/api/v2/pokedex/?limit=1000', { cancelToken: source.token })
            .then( (o:any) => {
                console.log(o.data.results)
                console.log('xdddddddddd')
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
                                            if(test3.length > 0){
                                                o2.normalStatus = test3[0].normalStatus
                                                o2.shinyStatus = test3[0].shinyStatus
                                            } else {
                                                o2.normalStatus = 'uncaught'
                                                o2.shinyStatus = 'uncaught'
                                            }
                                            console.log(o2.normalStatus)
                                        } else {
                                            o2.normalStatus = 'uncaught'
                                            o2.shinyStatus = 'uncaught'
                                        }
                                        return o2
                                    }
                                }
                            )
                            setFiltredPokemons(test)
                            setDisplayPokemons(filters.name == '' ? test : test.filter( (o: IPokemon) => {
                                if(o.name.includes(filters.name)){
                                    console.log(o)
                                    return o
                                }
                            }))
                            window.scrollTo(0, 0)
                            setLastElement(40)
                            console.log('ostatni element:' , lastElement)
                        })
                    }).finally(() => {
                        source.cancel();
                    }).catch(err => console.log(err))
            }).catch(err => console.log('error: ', err))
    },[filters.pokedex, filters.gameVersion, filters.shineHelper, filters.statusFilter])

    useEffect(() => {
        if(filters.name != '')
            setDisplayPokemons(filtredPokemons.filter( (o: IPokemon) => {
                if(o.name.includes(filters.name)){
                    console.log(o)
                    return o
                } 
            }))
        else 
            setDisplayPokemons(filtredPokemons)
    }, [filters.name])

    const loadMore = (i:number) => {
        console.log(lastElement)
        if(i == lastElement-5 && lastElement < filtredPokemons.length){
            setLastElement(prev => prev += 20)
        } else if(i == lastElement-5 && lastElement < filtredPokemons.length && lastElement != 40){
            console.log('makapaka')
            setLastElement(filtredPokemons.length)
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
                    <motion.main animate='animate' exit='exit' initial='initial' variants={delayVariant} className="HomePage" id='HomePage' key={2}>
                        {
                            filters.statusFilter == 'all' ?
                                displayPokemons.slice(0,lastElement).map( (o:IPokemon, i:number) => {
                                    return(
                                        <div key={i}>
                                            <Waypoint onEnter={() => loadMore(i)} />
                                            <PokemonBlock key={o.id} imgUrl={o.imgUrl} name={o.name} id={o.id} status={ filters.shineHelper ? o.shinyStatus: o.normalStatus} />
                                        </div>
                                    )
                                })
                            :
                                !filters.shineHelper ?
                                    filters.statusFilter == 'caught' ?
                                        displayPokemons.filter( (o:IPokemon) => o.normalStatus == 'caught' ? o : null).slice(0,lastElement).map( (o:IPokemon, i:number) => {
                                            return(
                                                <div key={o.id}>
                                                    <Waypoint onEnter={() => loadMore(i)} />
                                                    <PokemonBlock key={o.id} imgUrl={o.imgUrl} name={o.name} id={o.id} status={ filters.shineHelper ? o.shinyStatus: o.normalStatus} />
                                                </div>
                                            )
                                        })
                                    :
                                        filtredPokemons.filter( (o:IPokemon) => o.normalStatus == 'uncaught' ? o : null).slice(0,lastElement).map( (o:IPokemon, i:number) => {
                                            return(
                                                <div key={o.id}>
                                                    <Waypoint onEnter={() => loadMore(i)} />
                                                    <PokemonBlock key={o.id} imgUrl={o.imgUrl} name={o.name} id={o.id} status={ filters.shineHelper ? o.shinyStatus: o.normalStatus} />
                                                </div>
                                            )
                                        })
                                :
                                    filters.statusFilter == 'caught' ?
                                        displayPokemons.filter( (o:IPokemon) => o.shinyStatus == 'caught' ? o : null).slice(0,lastElement).map( (o:IPokemon, i:number) => {
                                            return(
                                                <div key={o.id}>
                                                    <Waypoint onEnter={() => loadMore(i)} />
                                                    <PokemonBlock key={o.id} imgUrl={o.imgUrl} name={o.name} id={o.id} status={ filters.shineHelper ? o.shinyStatus: o.normalStatus} />
                                                </div>
                                            )
                                        })
                                    :
                                        displayPokemons.filter( (o:IPokemon) => o.shinyStatus == 'uncaught' ? o : null).slice(0,lastElement).map( (o:IPokemon, i:number) => {
                                            return(
                                                <div key={o.id}>
                                                    <Waypoint onEnter={() => loadMore(i)} />
                                                    <PokemonBlock key={o.id} imgUrl={o.imgUrl} name={o.name} id={o.id} status={ filters.shineHelper ? o.shinyStatus: o.normalStatus} />
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