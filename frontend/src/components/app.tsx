import * as React from 'react'
import {Route, Switch, useLocation, BrowserRouter} from 'react-router-dom'
import { Header } from './Header'
import { VisitHomePage } from './visitHomePage'
import { Glow } from './Glow'
import { AnimatePresence } from 'framer-motion'
import { Login } from './login'
import { Register } from './register'
import { HomePage } from './HomePage'
import { PokemonDetails } from './pokemonDetails'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { loadUserData } from './actions/loadUserData'
import { SafeRoute } from './safeRoute'
import { combinedReducers } from './reducers/combined'
var OpenSans = require('./../../fonts/OpenSans-Regular.ttf')


export const App = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadUserData())
    }, [])

    return(
        <>
                <BrowserRouter>
                    <Route render={
                        ({location}) => (
                            <>
                                <Header path={location} />
                                <AnimatePresence exitBeforeEnter>
                                    <Switch location={location} key={location.key}>
                                    <Route exact path='/pokecharm/pokemon/:id' render={() => <SafeRoute path='/pokecharm/pokemon/:id' component={<PokemonDetails />} />} />
                                        <Route exact path='/' component={VisitHomePage} />
                                        <Route exact path='/login/' component={Login} />
                                        <Route exact path='/register/' component={Register} />
                                        <Route exact path='/pokecharm' render={() => <SafeRoute path='/pokecharm' component={<HomePage />} />} />   
                                        <Route path='*' exact render={() => <h1>error 404</h1>} />
                                    </Switch>
                                </AnimatePresence>
                                <Glow />
                            </>
                        )
                    } />
                </BrowserRouter>
        </>
    )
}