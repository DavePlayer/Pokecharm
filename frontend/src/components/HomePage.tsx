import * as React from 'react'
import { PokemonBlock } from './pokemonBlock'
import { useSelector, useDispatch } from 'react-redux'
import { IPokemon } from './reducers/pokemons'
import { combinedReducers } from './reducers/combined'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Footer } from './footer'
import { fetchPokemons } from './actions/fetch_pokemons'
import axios from 'axios'
import { usePromiseTracker, trackPromise } from "react-promise-tracker"

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

export const HomePage = () => {
    const pokemons:Array<IPokemon> = useSelector( (o:combinedReducers) => o.pokemons)
    const [isLoading, setIsLoading] = useState(true)
    const dispatch = useDispatch()
    let delay=0
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
                            imgUrl: `https://pokeres.bastionbot.org/images/pokemon/${o.entry_number}.png`
                        }
                        dispatch(fetchPokemons(newPokemon))
                    })
                })
                .finally( () => {
                        console.log('setting loading to false')
                        setIsLoading(false)
                })
        }, 3000)
    }, [])
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
                    <main className="HomePage" key={2}>
                        {
                            pokemons.slice(0,20).map( (o:any, i:number) => {
                                return <PokemonBlock key={o.id} delay={delay+=0.2} imgUrl={o.imgUrl} name={o.name} id={o.id} status={o.status} />
                            })
                        }
                        <Footer />
                    </main>
            }
        </AnimatePresence>
    )
}