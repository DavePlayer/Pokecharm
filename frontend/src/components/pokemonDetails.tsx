import * as React from 'react'
import Axios from 'axios'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Radar } from 'react-chartjs-2'

const mainVariant = {
    initial:{x: '-100vw'},
    exit:{x: '100vw', transition: {
        duration: 0.7
    }},
    animate:{x: 0, transition: {
        duration: 0.7
    }}
}

export const PokemonDetails:React.FC = () => {
    let { id } = useParams()
    const [data, setData]:any = useState()
    const [dex, setDex]:any = useState()
    const [chart, setChart]:any = useState()
    const [fetched, setfetched] = useState(false)
    useEffect(() => {
        Axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then( o => {
            setData(o.data)
                console.log('stat ', o.data.stats[0].base_stat)
                setChart({
                    responsive: true,
                    maintainAspectRatio: false,
                    type: 'radar',
                    labels: ['Hp', 'Attack', 'Defense', 'Special Attack', 'Special Defense', 
                        'Speed'],
                    datasets: [
                        {
                            label: 'Stats',
                            data: [
                                o.data.stats[0].base_stat,
                                o.data.stats[1].base_stat,
                                o.data.stats[2].base_stat,
                                o.data.stats[3].base_stat,
                                o.data.stats[4].base_stat,
                                o.data.stats[5].base_stat,
                            ],
                            borderColor: 'rgba(255, 255, 255, 1)',
                            pointBackgroundColor: 'rgba(255, 255, 255, 1)',
                            pointBorderWidth: 6
                        }
                    ]
            
                })
            setfetched(true)
        })
        Axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
        .then((o:any) => {
            const something = o.data.flavor_text_entries.filter( (oo:any) => {
                return (oo.language.name == 'en') ? oo.version.name : null
            })
            setDex( something[0] )
            console.log(`dexxxxx: ${dex}`)
            console.log(something)
        })
    }, [])
    return (
        <>
        {
            (fetched && dex) &&
            (<div style={{overflow: 'hidden'}}>
                <motion.main className='pokemonDatails' variants={mainVariant} initial='initial' animate='animate' exit='exit'  >
                    <section className="mainData">
                        <figure><img src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`} alt={data.name}/></figure>
                        <article>
                                {
                                    id <= 9 ?
                                    <h1>#00{id} {data.name}</h1>
                                    :
                                    id <= 99 ?
                                    <h1>#0{id} {data.name}</h1>
                                    :
                                    <h1>#{id} {data.name}</h1>
                                }
                                <div className='types'>
                                    {
                                        data.types.map( (o:any) => {
                                            return <div key={o.type.name} className={o.type.name}>{o.type.name}</div>
                                        })
                                    }
                                </div>
                        </article>
                    </section>
                    <section className="chart">
                        <Radar
                            data={chart}
                            options={{
                                responsive:true,
                                maintainAspectRatio: false,
                                legend: {
                                    display: false, 
                                },
                                scale: {
                                    angleLines: {
                                        display: false
                                    },
                                    pointLabels: {
                                        fontColor: 'rgba(255, 255, 255, 1)'
                                    }, 
                                    ticks: {
                                        suggestedMin: 20,
                                        suggestedMax: 150,
                                        display: false
                                    },
                                    gridLines: {
                                        color: 'rgba(255, 255, 255, 0.6)'
                                    }
                                }
                            }}
                        />
                    </section>
                    <section className="pokemonStatus">
                        <h1>Change Status</h1>
                        <button className="caught">Normal Caught</button>
                        <button className="uncaught">Shiny Uncaught</button>
                    </section>
                    <section className="pokedexEntry">
                        <p>{dex.flavor_text}</p>
                    </section>
                </motion.main>
            </div>)
        }
        </>
    )
}