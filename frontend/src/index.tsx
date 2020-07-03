import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { App } from './components/app'
import './main.scss'
import {BrowserRouter} from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { reducers } from './components/reducers/combined'

const store = createStore(reducers)

ReactDOM.render(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>, document.getElementById('root'))