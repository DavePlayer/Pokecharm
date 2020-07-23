import * as React from 'react'
import axios from 'axios'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { Radar } from 'react-chartjs-2'
import { FilterState } from './reducers/filters'
import { useSelector } from 'react-redux'
import { combinedReducers } from './reducers/combined'
import { getGameNameById } from '../getGameNameById'

const mainVariant = {
    initial:{x: '-100vw'},
    awaiting: {
        opacity: 0
    },
    exitAwaiting: {
        opacity: 0,
        transition: {
            duration: 0.7
        }
    },
    exit:{x: '100vw', transition: {
        duration: 0.7
    }},
    animate:{x: 0, opacity: 1, transition: {
        duration: 0.7
    }}
}

export const PokemonDetails:React.FC = () => {
    const history = useHistory()
    let { id } = useParams()
    const [data, setData]:any = useState()
    const [loadinsStatus, setLoadinsStatus] = useState('Loading')
    const [dex, setDex]:any = useState()
    const [chart, setChart]:any = useState()
    const [fetched, setfetched] = useState(false)
    const [changingNormalStatus, setChangingNormalStatus] = useState(false)
    const [changingShinyStatus, setChangingShinyStatus] = useState(false)
    const filters: FilterState = useSelector( (combined:combinedReducers) => combined.filters)
    const user = useSelector( (combined:combinedReducers) => combined.user)
    const [normalStatus, setNormalStatus] = useState('uncaught')
    const [shinyStatus, setShinyStatus] = useState('uncaught')
    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then( o => {
            setData(o.data)
            console.log('beggining: ', o.data)
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
                axios.get('http://10.0.0.26:7200/data/getCatchStatus', {params: {gameVersion: getGameNameById(filters.gameVersion), pokedex: filters.pokedex}, headers: {authorization: user.token}})
                .then( (oo:any) => {
                    console.log(oo.data.data)
                    const test4 = oo.data.data.filter( (o2:any) => {
                        console.log(o2.pokemonName, o.data.name)
                        if(o2.pokemonName == o.data.name){
                            return o2
                        }
                    })
                    console.log(test4)
                    if(test4.length > 0){
                        setNormalStatus(test4[0].normalStatus)
                        setShinyStatus(test4[0].shinyStatus)
                    }
                    setfetched(true)
                }) .catch ( err => {
                    console.log(err, user.token)
                    setNormalStatus('database error')
                    setShinyStatus('database error')
                    setLoadinsStatus('database error, refresh website')
                    setTimeout(() => history.push('/'), 3000)
                })
        })
        axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
        .then((o:any) => {
            const something = o.data.flavor_text_entries.filter( (oo:any) => {
                return (oo.language.name == 'en') ? oo.version.name : null
            })
            setDex( something[0] )
            console.log(`dexxxxx: ${dex}`)
            console.log(something)
        })
    }, [])

    const hendleChangeStatus = (status: string, shiny: boolean) => {
        if(changingNormalStatus == false && changingShinyStatus == false){
            let body = {
                type: 'insertData',
                gameVersion: getGameNameById(filters.gameVersion),
                pokedex: filters.pokedex,
                pokemonName: data.name,
                status: status,
                shiny: shiny,
            }
            axios.post('http://10.0.0.26:7200/data/insertCatchStatus', body, {headers: {'Authorization': user.token}})
            .then( o => {
                if(!shiny){
                    setNormalStatus(status)
                    setChangingNormalStatus(true)
                } else {
                    setShinyStatus(status)
                    setChangingShinyStatus(true)
                }
                setTimeout(() => {setChangingNormalStatus(false); setChangingShinyStatus(false)}, 1000)
    
            }) .catch ( err => {
                setNormalStatus('database error')
                setShinyStatus('database error')
            })
        }
    }

    return (
        <div style={{overflow: 'hidden', position: 'relative', zIndex: 2}}>
        {
            (fetched && dex) ?
            (<motion.div  variants={mainVariant} initial='initial' animate='animate' exit='exit'>
                <motion.main className='pokemonDatails'>
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
                        <button 
                            onClick={ () => hendleChangeStatus(normalStatus =='caught' ? 'uncaught' : 'caught', false)} 
                            className={changingNormalStatus ? 'changingStatus' : normalStatus}
                        >
                            Normal: {changingNormalStatus ? 'Loading...' : normalStatus}
                        </button>
                        <button 
                            onClick={ () => hendleChangeStatus(shinyStatus =='caught' ? 'uncaught' : 'caught', true)} 
                            className={changingShinyStatus ? 'changingStatus' : shinyStatus}
                        >
                            Shiny: {changingShinyStatus ? 'Loading...' : shinyStatus}
                        </button>
                    </section>
                    <section className="pokedexEntry">
                        <p>{dex.flavor_text}</p>
                    </section>
                </motion.main>
            </motion.div>)
            :
                <motion.h1 className='errorH1' variants={mainVariant} initial='awaiting' animate='animate' exit='exitAwaiting'>{loadinsStatus}</motion.h1>
        }
        </div>
    )
}