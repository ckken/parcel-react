import React from 'react'
import { store, Provider } from './store'
import { Router, browserHistory } from 'react-router'
import createRoutes from './router'
const routes = createRoutes()
export default class App extends React.Component {
  render() {
    if (process.env.NODE_ENV === 'development') { // 开发模式暂时注释
      import('mobx-logger').then(({ enableLogging }) => {
        enableLogging({
          predicate: () => true,
          action: true,
          transaction: true,
          reaction: true,
          compute: true
        })
      })
    }
    return (
      <Provider store={store}>
        <Router history={browserHistory} routes={routes}></Router>
      </Provider>
    )
  }
}
