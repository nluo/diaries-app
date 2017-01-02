import * as React from 'react'
import * as ReactDom from 'react-dom'
import store from './store'
import { Provider } from 'react-redux'
import router from './router'
import * as injectTapEventPlugin from 'react-tap-event-plugin' 
injectTapEventPlugin()

import { MuiThemeProvider } from 'material-ui/styles'

const App = () => (
  <MuiThemeProvider>
     <Provider store={store}>
        {router}
    </Provider>
  </MuiThemeProvider>
);


ReactDom.render(
    <App />,
    document.getElementById('root')
)
