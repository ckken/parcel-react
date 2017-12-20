import React from 'react'
import { store, Provider,debug } from './store'
import { Router, browserHistory } from 'react-router'
import createRoutes from './router'
const routes = createRoutes()
export default class App extends React.Component {
  render() {
    debug()
    return (
      <Provider store={store}>
        <Router history={browserHistory} routes={routes}></Router>
      </Provider>
    )
  }
}
