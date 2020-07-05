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
    const [isLoading, setIsLoading] = useState(true)
    const [lastElement, setLastElement] = useState(40)
    const dispatch = useDispatch()
    useEffect(() => {
        setIsLoading(true)
        setTimeout(() => {
            axios.get('https://pokeapi.co/api/v2/pokedex/1/')
                .then( (pokedex:any) => {
                    console.log(pokedex)
                    pokedex.data.pokemon_entries.map((o:any) => {
                        let newPokemon:IPokemon = {
                            id: o.entry_number,
                            name: o.pokemon_species.name,
                            status: 'uncaught',
                            imgUrl: `https://pokeres.bastionbot.org/images/pokemon/${o.entry_number}.png`,
                            details: o.pokemon_species.url
                        }
                        dispatch(fetchPokemons(newPokemon))
                    })
                })
                .finally( () => {
                        setIsLoading(false)
                })
        }, 3000)
    }, [])

    const loadMore = (i:number) => {
        if(i == lastElement-5){
            setLastElement(prev => prev += 20)
        }
    }
    return (
        <AnimatePresence exitBeforeEnter>
            {
                isLoading ?
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
                            pokemons.slice(0,lastElement).map( (o:any, i:number) => {
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
    )
}