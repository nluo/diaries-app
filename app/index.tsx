import * as React from 'react'
import * as ReactDom from 'react-dom'
import store from './store'


const App = function (props: any) {
    return (
        <div>
            <h1> Hello React </h1>
        </div>
    )
}

ReactDom.render(
    <App/>,
    document.getElementById('root')
)
