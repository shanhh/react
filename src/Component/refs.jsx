import React, {Component, PropTypes} from 'react';
import {Header, template} from './common/mixin';

class Main extends Component{
	constructor () {
		super();
	}
	componentDidMount () {
		let child = this.refs.child;
		child.test();
	}
	render () {
		return(
			<div className='refs_test'>
				<Header nav title='refs' />
				<Child ref = 'child'/>
			</div>
		);
	}
}

class Child extends Component{
	constructor () {
		super();
		this.test = () => {
			console.log('child 的事件 父级还可以调用')
		}
	}
	render () {
		return(
			<div className='refs_child'>
				<p>child</p>
			</div>
		);
	}
}

export default template({
	id: 'refs',
	component: Main,
	url: ''
})