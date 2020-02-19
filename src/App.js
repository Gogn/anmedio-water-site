import React, {useContext} from 'react';
import './index.css'
import {AppContext} from "./store/appContext";
import {Route, Switch, Redirect, withRouter} from 'react-router-dom'
import {Order} from "./Pages/Order";
import {OrderFinish} from "./Pages/OrderFinish";

const App = () => {
  const appContext = useContext(AppContext)
  // const { isAuthenticated } = useContext(AppContext)

  let routes = (
    <Switch>
      <Route path='/' exact component={Order}/>
    </Switch>
  )

  if (appContext.isAuthenticated) {
    routes = (
      <Switch>
        <Route path='/' exact component={Order}/>
        <Route path='/order' component={OrderFinish}/>
        {/*<Redirect to='/'/>*/}
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
