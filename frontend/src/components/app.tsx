import * as React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import { Header } from './Header'
import { VisitHomePage } from './visitHomePage'


export class App extends React.Component {
    constructor(props:any){
        super(props)
    }
    
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' render={() => <WelcomeWrapper children={<VisitHomePage />} />} />
                    <Route exact path='/login' render={() => <h1>login</h1>} />
                    <Route exact path='/register' render={() => <h1>register</h1>} />
                </Switch>
            </BrowserRouter>
        )
    }
}

interface IPropHolder {
    children?: React.ReactNode,
    isLoadedApp?: boolean,
}

const WelcomeWrapper:React.FC = (props:IPropHolder) => (
    <>
        <Header isLoadedApp={props.isLoadedApp} />
        {
            (props.children && props.children)
        }
        <h1>footer</h1>
    </>
)