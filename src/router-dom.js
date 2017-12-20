import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'
import Notfound from './Notfound'
import pages from 'pages/*/*/*.js'

export default ()=>(
  <Router>
    <div>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Redirect from="/old-match" to="/will-match"/>
        <Route path="/will-match" component={WillMatch}/>
        <Route component={Notfound}/>
      </Switch>
    </div>
  </Router>
)