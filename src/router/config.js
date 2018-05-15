/**
 * File Created: 2018-05-14 4:41:24 pm
 * Author: shanhaohui
 * -----
 * Last Modified: 2018-05-14 5:27:45 pm
 * Modified By: shanhaohui
 * -----
 * Copyright (c) 2018 rongyi
 */

import asyncComponent from './asyncComponent'

const _import_components = file => asyncComponent(() => import(`../views/${file}`))

export const routerMap = [
  { 
    path: '/home', 
    name: '首页', 
    component: _import_components('Home')
  },
  { 
    path: '/video', 
    name: '视频',
    component: _import_components('Video')
  },
  { 
    path: '/headline', 
    name: '微头条',
    component: _import_components('Headline')
  },
  { 
    path: '/mine', 
    name: '我的',
    component: _import_components('Mine')
  }
]