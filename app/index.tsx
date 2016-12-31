import * as React from 'react'
import * as ReactDom from 'react-dom'
import store from './store'
import { Provider } from 'react-redux'
import router from './router'

ReactDom.render(
    <Provider store={store}>
        {router}
    </Provider>,
    document.getElementById('root')
)
