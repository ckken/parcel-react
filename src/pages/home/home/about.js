import React, { PureComponent } from 'react'
import { Button } from 'antd'

import styles from './about.less'

export default class IndexView extends PureComponent {
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
