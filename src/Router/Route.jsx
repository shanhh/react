import React, {Component, PropTypes} from 'react';
import { Router, Route, Redirect, IndexRoute, browserHistory, hashHistory } from 'react-router';

import index from '../Component/index'; //销售录入

class Roots extends Component {
    render() {
        return (
            <div>{this.props.children}</div>
        );
    }
}

const history = process.env.NODE_ENV !== 'production' ? browserHistory : hashHistory;


const chooseProducts = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../Component/chooseProducts').default)
    },'chooseProducts')
}

const helpCenter = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../Component/helpCenter').default)
    },'helpCenter')
}

const saleRecord = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../Component/saleRecord').default)
    },'saleRecord')
}

const allDeposit = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../Component/allDeposit').default)
    },'allDeposit')
}

const applyRecord = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../Component/applyRecord').default)
    },'applyRecord')
}

const applyDeposit = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../Component/applyDeposit').default)
    },'applyDeposit')
}

const spread = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../Component/spread').default)
    }, 'spread')
}

const refs = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../Component/refs').default)
    }, 'refs')
}

const reactDemo = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../Component/reactDemo').default)
    }, 'reactDemo')
}

const RouteConfig = ( 
    <Router history={history}>
        <Route path="/" component={Roots}>
            <IndexRoute component={index} />//首页
            <Route path="index" component={index} />
            <Route path="helpCenter" getComponent={helpCenter} />//帮助中心
            <Route path="saleRecord" getComponent={saleRecord} />//销售记录
            <Route path="chooseProducts" getComponent={chooseProducts} />//选择商品
            <Route path="allDeposit" getComponent={allDeposit} />//余额
            <Route path="applyDeposit" getComponent={applyDeposit} />//申请提现
            <Route path="applyRecord" getComponent={applyRecord} /> //提现记录
            <Route path="spread" getComponent={spread} />//传值
            <Route path="refs" getComponent={refs} />
            <Route path="reactDemo" getComponent={reactDemo} />
            <Redirect from='*' to='/'  />
        </Route>
    </Router>
);

export default RouteConfig;