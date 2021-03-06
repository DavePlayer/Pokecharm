import * as React from 'react'
import { motion } from 'framer-motion'
import { useHistory } from 'react-router-dom'

interface IProps {
    id: number,
    name: string,
    status: string,
    imgUrl: string,
}

export const PokemonBlock:React.FC<IProps> = (props) => {
    const history = useHistory()
    const pokeVariant = {
        initial: {
            scale: 0
        },
        animate: {
            scale: 1,
            transition: {
                duration: 0.3,
            }
        },
        exit: {
            scale: 0,
            transition: {
                duration: 0.3,
            }
        }
    }
    return (
        <motion.section onClick={() => history.push(`/pokecharm/pokemon/${props.id}`)} variants={pokeVariant} className='PokeBlock'>
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
                <div className="name">{props.name.slice(0, 1).toLocaleUpperCase()}{props.name.slice(1, props.name.length)}</div>
            </header>
            <figure><img src={props.imgUrl} alt="Bulbasaur"/></figure>
                {
                    props.status=='caught'? <article className='blue'>Status: <span> {props.status}</span></article>
                    :
                    <article  className='red'>Status: <span> {props.status}</span></article>
                }
        </motion.section>
    )
}