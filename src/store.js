import { observable, action, autorun, computed } from 'mobx'
import { inject, observer, Provider } from 'mobx-react'
import stores from 'store/*/*.js'
console.log(`stores`, stores)
class Store {
    @observable __privateStore = {}
    @action register(storeName) {
        const [module, name] = storeName.split('/')
        const Cls = stores[module][name].default
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

export {
    store,
    inject,
    observer,
    Provider,
    observerFn
}
