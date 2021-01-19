import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from "mobx-react"
import './index.css'
import App from './app'
// import store from './stores/_store.ts_'

ReactDOM.render(
    <React.StrictMode>
        {/* <Provider store={store}> */}
            <App />
        {/* </Provider> */}
    </React.StrictMode>,
    document.getElementById('root')
)