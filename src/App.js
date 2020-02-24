import React from 'react';
import './index.css'
import {Route, Switch, withRouter} from 'react-router-dom'
import {Order} from "./Pages/Order";
import {OrderFinish} from "./Pages/OrderFinish";

const App = () => {

  let routes = (
    <Switch>
      <Route path='/' exact component={Order}/>
      <Route path='/order' component={OrderFinish}/>
    </Switch>
  )

  return (
    <>
      {routes}
    </>
  )
}

export default withRouter(App);
