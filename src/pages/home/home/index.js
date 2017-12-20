import React from 'react'
import { Button } from 'antd'

import { inject, observer } from 'store'
@inject('store')
@observer
export default class HomeIndex extends React.Component {
    componentWillMount() {
        this.store = this.props.store.register('home/index')
    }
    render() {
        return (
            <div> 
                <h1>home {this.store.data.a}</h1>
                <button onClick={(e) => this.store.setData({ a: 2 })}>设置</button>
                <Button type="primary">Primary</Button>
                <Button>Default</Button>
                <Button type="dashed">Dashed</Button>
                <Button type="danger">Danger</Button>
                <Button type="primary" size="large">
                    按钮
                </Button>
            </div>
        )
    }
}