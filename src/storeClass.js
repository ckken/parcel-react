import { observable, action, autorun, computed, toJS } from 'mobx'
import http from 'src/helper/http'

export default class {
    @observable map = new Map()
    @action async get(url,map,dataName){
        const d = await http.get(this.url, map)
        this.map.set(dataName,d)
        return d
    }
    @action async post(url,map,dataName){
        this.loading = true
        const d = await http.post(this.url, map)
        this.map.set(dataName,d)
        return d
    }
}