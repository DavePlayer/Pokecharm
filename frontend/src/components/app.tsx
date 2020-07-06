import * as React from 'react'
import {Route, Switch, BrowserRouter} from 'react-router-dom'
import { Header } from './Header'
import { VisitHomePage } from './visitHomePage'
import { Glow } from './Glow'
import { AnimatePresence } from 'framer-motion'
import { Login } from './login'
import { Register } from './register'
import { HomePage } from './HomePage'
import { PokemonDetails } from './pokemonDetails'


export const App = () => {
    return(
        <>
                <BrowserRouter>
                    <Route render={
                        ({location}) => (
                            <>
                                <Header path={location} />
                                <AnimatePresence exitBeforeEnter>
                                    <Switch location={location} key={location.key}>
                                        <Route exact path='/' component={VisitHomePage} />
                                        <Route exact path='/login/' component={Login} />
                                        <Route exact path='/register/' component={Register} />
                                        <Route exact path='/pokecharm/' component={HomePage} />
                                        <Route exact path='/pokecharm/pokemon/:id' component={PokemonDetails} />
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