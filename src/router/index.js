/**
 * File Created: 2018-05-07 5:42:55 pm
 * Author: shanhaohui
 * -----
 * Last Modified: 2018-05-07 6:42:41 pm
 * Modified By: shanhaohui
 * -----
 * Copyright (c) 2018 rongyi
 */


import React from 'react'
import {Route, Switch, Redirect, HashRouter} from 'react-router-dom'
import { css } from 'glamor'
import {routes, loyoutRouterMap, notLoyoutRouterMap} from './config'
import { AnimatedSwitch } from 'react-router-transition'
import Loyout from 'src/App'

const renderRouteComponent = routes => routes.map( (route, index) => {
	return <Route key={index} {...route}/>
})

const NotLoyoutRouter = renderRouteComponent(notLoyoutRouterMap)
const LoyoutRouter = renderRouteComponent(loyoutRouterMap)

const wrapperRule = css({
	width: '100%',
	height: '100%',
	position: 'absolute',
	left:0,
	top:0
})
