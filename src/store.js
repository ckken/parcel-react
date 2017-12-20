import { observable, action, autorun, computed } from 'mobx'
import { inject, observer, Provider } from 'mobx-react'
import stores from 'stores/*/*.js'
class Store {
    @observable __privateStore = {}
    @action register(storeName) {
        const [module, name] = storeName.split('/')
        const Cls = stores[module][name]
        this.__privateStore[storeName] = new Cls()
        return this.__privateStore[storeName]
    }
    @action unregister(storeName) {
        if (this.__privateStore[storeName]) {
            delete this.__privateStore[storeName]
        }
    }
}
const store = new Store()
const observerFn = function (fn) {
    return inject('store')(observer(fn))
}

function debug(){
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
}

export {
    store,
    inject,
    observer,
    Provider,
    observerFn,
    debug
}
