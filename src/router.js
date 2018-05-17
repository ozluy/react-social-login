import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import history from 'common/history'
import Register from 'pages/Register'
import CompleteRegister from 'pages/CompleteRegister'
import NotFound from 'pages/NotFound'
import { RegisterProvider } from 'common/registerContextAPI'

const AppRouter = () => (
  <Router history={history}>
    <RegisterProvider>
      <Switch>
        <Route path="/" exact component={Register} />
        <Route path="/complete-register" component={CompleteRegister} />
        <Route component={NotFound} />
      </Switch>
    </RegisterProvider>
  </Router>
)

export default AppRouter
