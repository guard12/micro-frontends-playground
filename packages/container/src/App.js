import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { StylesProvider, createGenerateClassName } from '@material-ui/core'

import Header from './components/Header'
import MarketingApp from './components/MarketingApp'
import AuthApp from './components/AuthApp'

const generateClassName = createGenerateClassName({
  productionPrefix: 'co'
})


export default () => {
  return <BrowserRouter>
    <StylesProvider createGenerateClassName={createGenerateClassName}>
      <Header />
      <Switch>
        <Route path="/auth" component={AuthApp}/>
        <Route path="/" component={MarketingApp}/>
      </Switch>
    </StylesProvider>
  </BrowserRouter>

}