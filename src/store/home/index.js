import { observable, action, autorun, computed } from 'mobx'

export default class {
    @observable data = {
        a: 1
    }
    @action setData(state) {
        this.data = state
    }
}
