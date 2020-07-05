import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { App } from './components/app'
import './main.scss'
import {BrowserRouter} from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { reducers } from './components/reducers/combined'
import { composeWithDevTools } from 'redux-devtools-extension';


const store = createStore(
    reducers,
    composeWithDevTools(
        applyMiddleware(),
        // other store enhancers if any
    )
)


ReactDOM.render(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>, document.getElementById('root'))