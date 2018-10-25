/*
 * File Created: 2018-10-25 2:25:51 pm
 * Author: shanhaohui
 * -----
 * Last Modified: 2018-10-25 2:27:31 pm
 * Modified By: shanhaohui
 * -----
 * Copyright (c) 2018 rongyi
 */

export const parse = (getUrl) => {
  var objUrl = getUrl.substr(1).split('&');
  var newObj = {};
  objUrl.map(item => {
    newObj[item.split('=')[0]] = item.split('=')[1];
  })
  return newObj;
}

export const stringify = (obj) => {
  var str = '';
  for (let i in obj) {
    str += `${i}=${obj[i]}&`
  }
  return str.substr(0, str.length-1);
}

export default {
  parse,
  stringify
}

