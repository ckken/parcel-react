/**
 * Created by ken on 2017/5/5.
 */
import {
    observable,
    action,
    autorun,
    computed,
    toJS
} from 'mobx'
import Cls from 'src/storeClass'
import {
    inject,
    observer,
    Provider
} from 'mobx-react'
class Store {
    @observable __privateStore = {}
    @action register(storeName) {
        if (!this.__privateStore[storeName]) {
            this.__privateStore[storeName] = new Cls()
        }
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

function debug() {
    if (process.env.NODE_ENV === 'development') { // 开发模式暂时注释
        const {
            enableLogging
        } = require('mobx-logger')
        enableLogging({
            predicate: () => true,
            action: true,
            transaction: true,
            reaction: true,
            compute: true
        })
    }
}
export {
    debug,
    store,
    inject,
    observer,
    Provider,
    observerFn,
    toJS
}