import React, { PureComponent } from 'react'
import { Button } from 'antd'

import styles from './about.less'

export default class IndexView extends PureComponent {
  async componentWillMount(){
    let moment = await import('helper/moment')
    console.log(`moment`,moment)
  }
  render() {
    return (
      <div className={styles.page}>
        index view 
        <Button type="primary" size="large">
          按钮
        </Button>
      </div>
    )
  }
}
