import * as React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'


export class App extends React.Component {
    constructor(props:any){
        super(props)
    }
    
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' render={() => <WelcomeWrapper children={<h1>home</h1>} />} />
                    <Route exact path='/login' render={() => <h1>login</h1>} />
                    <Route exact path='/register' render={() => <h1>register</h1>} />
                </Switch>
            </BrowserRouter>
        )
    }
}

interface IPropHolder {
    children?: React.ReactNode
}

const WelcomeWrapper:React.FC = (props:IPropHolder) => (
    <>
        <h1>header</h1>
        {
            (props.children && props.children)
        
        }
        <h1>footer</h1>
    </>
)