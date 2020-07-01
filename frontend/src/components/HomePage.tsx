import * as React from 'react'
import { PokemonBlock } from './pokemonBlock'


export const HomePage = () => {
    const palceBacks = [
        {
            name: 'Bulbasaur',
            id: 1,
            status: 'caught',
            imgUrl: `https://pokeres.bastionbot.org/images/pokemon/1.png`
        },
        {
            name: 'Bulbasaur',
            id: 62,
            status: 'uncaught',
            imgUrl: `https://pokeres.bastionbot.org/images/pokemon/62.png`
        },
        {
            name: 'Bulbasaur',
            id: 633,
            status: 'caught',
            imgUrl: `https://pokeres.bastionbot.org/images/pokemon/633.png`
        },
        {
            name: 'Bulbasaur',
            id: 733,
            status: 'uncaught',
            imgUrl: `https://pokeres.bastionbot.org/images/pokemon/733.png`
        },
    ]
    let delay=0
    return (
        <main className="HomePage">
            {
                palceBacks.map( (o:any) => {
                    return <PokemonBlock delay={delay+=0.2} imgUrl={o.imgUrl} name={o.name} id={o.id} status={o.status} />
                })
            }
        </main>
    )
}