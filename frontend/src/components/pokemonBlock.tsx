import * as React from 'react'
import { motion } from 'framer-motion'

interface IProps {
    id: number,
    name: string,
    status: string,
    imgUrl: string,
    delay: number
}

export const PokemonBlock:React.FC<IProps> = (props) => {
    const pokeVariant = {
        initial: {
            scale: 0
        },
        animate: {
            scale: 1,
            transition: {
                duration: 0.3,
                delay: props.delay
            }
        }
    }
    return (
        <motion.section variants={pokeVariant} initial='initial' animate='animate' className='PokeBlock'>
            <header>
                {
                    props.id <= 9 ?
                    <div className="id">#00{props.id}</div>
                    :
                    props.id <= 99 ?
                    <div className="id">#0{props.id}</div>
                    :
                    <div className="id">#{props.id}</div>
                }
                <div className="name">{props.name}</div>
            </header>
            <figure><img src={props.imgUrl} alt="Bulbasaur"/></figure>
            <article>
                Status: 
                {
                    props.status=='caught'? <span className='blue'> {props.status}</span>
                    :
                    <span className='red'> {props.status}</span>
                }
            </article>
        </motion.section>
    )
}