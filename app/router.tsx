import * as React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { default as FriendListContainer } from './components/containers/friend-list-container'
import { default as DiaryListConnectedComponent } from './components/connected/diary-list-connected'
// Layouts
import { MainLayout } from './components/layouts/main-layout'

// Pages
import Home from './components/home'

// Login 
import LoginFormContainer from './components/containers/login-container'
import SignupFormContainer from './components/containers/signup-container'

export default (
  <Router history={ browserHistory }>
    <Route path="/" component={ MainLayout }>
      <IndexRoute component={ Home } />
      <Route path="/login" component = {LoginFormContainer} />
      <Route path="/register" component = {SignupFormContainer} />
      <Route path="/friends" component = { FriendListContainer } />
      <Route path="/diaries" component = { DiaryListConnectedComponent } />
      <Route path="/diaries/:diaryId" component = { DiaryListConnectedComponent } />
    </Route>
  </Router>
)
