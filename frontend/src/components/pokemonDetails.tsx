import * as React from 'react'
import { useParams } from 'react-router-dom'
import Axios from 'axios'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export const PokemonDetails:React.FC = () => {
    let { id } = useParams()
    const [data, setData] = useState()
    useEffect(() => {
        Axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
        .then( o => {
            setData(o.data)
        })
    }, [])
    console.log(data)
    return (
        <motion.main initial={{x: '-100vw'}} animate={{x: 0}} >
            <h1>pokemon {id}</h1>
        </motion.main>
    )
}