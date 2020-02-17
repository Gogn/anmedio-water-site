import React, {useContext} from 'react';
import './index.css'
import {AppContext} from "./store/appContext";
import {Route, Switch, Redirect, withRouter} from 'react-router-dom'
import {DesktopOrder} from "./Pages/DesktopOrder";
import {Order} from "./Pages/Order";

const App = () => {
  const appContext = useContext(AppContext)
  // const { isAuthenticated } = useContext(AppContext)

  let routes = (
    <Switch>
      <Route path='/' exact component={DesktopOrder}/>
    </Switch>
  )

  if (appContext.isAuthenticated) {
    routes = (
      <Switch>
        <Route path='/' exact component={DesktopOrder}/>
        <Route path='/order' component={Order}/>
        <Redirect to='/'/>
      </Switch>
    )
  }

  return (
    <>
      {routes}
    </>
  )
}

export default withRouter(App);
