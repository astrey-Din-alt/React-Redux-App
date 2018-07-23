import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import Root from './containers/Root'
import configureStore from './store/configureStore'
import './styles/app.css'
import 'babel-polyfill'

const store = configureStore();

render(
    <Provider store={store}>
        <div className='app'>
            <Root />
        </div>
    </Provider>,
    document.getElementById('root')
)