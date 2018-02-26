import React from 'react'
import ReactDOM from 'react-dom'
import {store, Provider, debug,inject, observer} from './store'
import App from './pages/index'
const render = Component => {
    debug()
    Component = inject('store')(observer(Component))
    ReactDOM.render(
      <Provider store={store}>
        <Component />
      </Provider>,
    document.getElementById('root')
    )
}
render(App)