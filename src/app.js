import React from 'react'
import {Router, browserHistory} from 'react-router'
import createRoutes from './router'
const routes = createRoutes()
export default class App extends React.Component {
  render() {
    return (
    <Router history={browserHistory} routes={routes}></Router>
    )
  }
}
