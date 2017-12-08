import React from 'react'
import './index.less'
export default class extends React.Component {
    state = {now:''}
    async componentWillMount(){
        const moment = await import('moment')
        this.setState({now:moment().format()})
    }
    render(){
    return (
        <div className="body">
            <h1>Hello World!!!</h1>
            <p>test css by less: {this.state.now}</p>
        </div>
        )
    }
}