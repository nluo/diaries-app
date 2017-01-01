import * as React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

// Layouts
import { MainLayout } from './components/layouts/main-layout'

// Pages
import Home from './components/home'

export default (
  <Router history={browserHistory}>
    <Route path="/" component={MainLayout}>
      <IndexRoute component={Home} />
      <Route path="/users"/>
    </Route>
  </Router>
)
