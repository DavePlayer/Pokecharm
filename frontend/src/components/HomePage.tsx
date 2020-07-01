import * as React from 'react'
import { PokemonBlock } from './pokemonBlock'

export const HomePage = () => {
    return (
        <main className="HomePage">
            <PokemonBlock name='Bulbasaur' id={1} status="caught" />
            <PokemonBlock name='Bulbasaur' id={62} status="caught" />
            <PokemonBlock name='Bulbasaur' id={633} status="caught" />
            <PokemonBlock name='Bulbasaur' id={1024} status="caught" />
        </main>
    )
}