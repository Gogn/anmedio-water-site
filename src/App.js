import React from 'react';
import {Route, Switch, Redirect, withRouter} from 'react-router-dom'
import './App.css';
import {Contact} from "./Pages/Contact";
import {Order} from "./Pages/Order";

const App = () => {

  let state = {
    isAuthenticated: 1
  }

  let routes = (
    <Switch>
      <Route path='/' exact component={Contact}/>
    </Switch>
  )
  if (state.isAuthenticated) {
    routes = (
      <Switch>
        <Route path='/' exact component={Contact}/>
        <Route path='/order' component={Order}/>
        <Redirect to='/'/>
      </Switch>
    )
  }

  return (
    <div>
      {routes}
    </div>
  )
}

export default withRouter(App);
