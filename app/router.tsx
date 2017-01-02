import * as React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { default as FriendListContainer } from './components/containers/friend-list-container'
import { default as DiaryListContainer } from './components/containers/diary-list-container'
// Layouts
import { MainLayout } from './components/layouts/main-layout'

// Pages
import Home from './components/home'

export default (
  <Router history={ browserHistory }>
    <Route path="/" component={ MainLayout }>
      <IndexRoute component={ Home } />
      <Route path="/friends" component = { FriendListContainer } />
      <Route path="/diaries" component = { DiaryListContainer } />
    </Route>
  </Router>
)
