/**
 * File Created: 2018-05-07 5:17:02 pm
 * Author: shanhaohui
 * -----
 * Last Modified: 2018-05-07 5:29:26 pm
 * Modified By: shanhaohui
 * -----
 * Copyright (c) 2018 rongyi
 */


import asyncComponent from './asyncComponent'

const _import_views = file => asyncComponent(() => import(`views/${file}`))

// 含layout的视图
export const loyoutRouterMap = [
  {
    path: '/', 
    name: '首页', 
    exact: true,
    component: _import_views('Home')
  }
]

// 不含Layout视图
export const notLoyoutRouterMap = [
  { 
    path: '/account', 
    name: '我的', 
    component: _import_views('Account')
  }
]

export const routes = [...loyoutRouterMap, ...notLoyoutRouterMap]