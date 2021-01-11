import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from "mobx-react"
import './index.css'
import App from './app'
import store from './stores/store'

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
)