import React, {useContext} from 'react';
import './index.css'
import {AppContext} from "./store/appContext";
import {Route, Switch, Redirect, withRouter} from 'react-router-dom'
import {Contact} from "./Pages/Contact";
import {Order} from "./Pages/Order";

const App = () => {
  const appContext = useContext(AppContext)
  // const { isAuthenticated } = useContext(AppContext)

  let routes = (
    <Switch>
      <Route path='/' exact component={Contact}/>
    </Switch>
  )

  if (appContext.isAuthenticated) {
    routes = (
      <Switch>
        <Route path='/' exact component={Contact}/>
        <Route path='/order' component={Order}/>
        <Redirect to='/'/>
      </Switch>
    )
  }

  return (
    <div className='grid'>
      {routes}
    </div>
  )
}

export default withRouter(App);
