import React from 'react'
import { observer } from 'src/store'
@observer
export default class extends React.Component {
    componentWillMount(){
        this.store = this.props.store.register('pages/index')
        this.store.map.set('name',1)
    }
    
    render(){
        let name = this.store.map.get('name')
        return (<div>
            hello word!!!{name}
            <a onClick={()=>{
                name+=1
                this.store.map.set('name',name)
            }}>click</a>
        </div>)
    }
}