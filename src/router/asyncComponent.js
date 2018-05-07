/**
 * File Created: 2018-05-07 5:01:36 pm
 * Author: shanhaohui
 * -----
 * Last Modified: 2018-05-07 5:14:58 pm
 * Modified By: shanhaohui
 * -----
 * Copyright (c) 2018 rongyi
 */


import React, { Component } from "react";
export default function asyncComponent(importComponent) {
  class AsyncComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        component: null
      };
    }
    async componentDidMount() {
      const { default: component } = await importComponent();
      this.setState({
        component: component
      });
    }
    render() {
      const C = this.state.component;
      return C ? <C {...this.props} /> : null;
    }
  }
  return AsyncComponent;
}