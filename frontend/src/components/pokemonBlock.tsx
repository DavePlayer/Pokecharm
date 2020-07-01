import * as React from 'react'

interface IProps {
    id: number,
    name: string,
    status: string
}

export const PokemonBlock:React.FC<IProps> = (props) => {
    return (
        <section className='PokeBlock'>
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
            <figure><img src="https://pokeres.bastionbot.org/images/pokemon/1.png" alt="Bulbasaur"/></figure>
            <article className='status'>Status: {props.status}</article>
        </section>
    )
}