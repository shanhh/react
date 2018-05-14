/**
 * File Created: 2018-05-14 4:45:31 pm
 * Author: shanhaohui
 * -----
 * Last Modified: 2018-05-14 5:12:21 pm
 * Modified By: shanhaohui
 * -----
 * Copyright (c) 2018 rongyi
 */

import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {routerMap} from './config'

const renderRouteComponent = routes => routes.map( (route, index) => {
  return <Route key={index} {...route}/>
})

const ViewRouter = renderRouteComponent(routerMap)

class Router extends React.Component {
  render () {
    return (
      <Switch>
        {ViewRouter}
      </Switch>
    )
  }
}

export default Router