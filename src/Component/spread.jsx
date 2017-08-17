import React, {Component, PropTypes} from 'react';
import eventProxy from '../Config/eventProxy';
import {Header, template} from './common/mixin';

class Main extends Component{
	constructor () {
		super();
		this.handleChildMsg = (msg) => {
			//父组件处理消息
			console.log('parent: ' + msg);
		}
	}
	render () {
		return(
			<div className='spread'>
				<Header nav title='传值' />
				<ChildOne transferMsg = {msg => this.handleChildMsg(msg)} />
				<ChildTwo/>
				<ChildThree/>
				<Child_1/>
				<Child_2/>
			</div>
		);
	}
}

class ChildOne extends Component{
	constructor () {
		super();
	}
	componentDidMount () {
		//子组件调用父组件的方法，将数据以参数的方式传递给父组件，这样父组件方法就得到了回调，也收到了数据
		this.props.transferMsg("child has mounted");
	}
	render () {
		return (
			<div>
				<div className='child_one'>例子1:ChildOne 子传父也是props</div>
			</div>
		);
	}	
}

class ChildTwo extends Component{
	constructor () {
		super();
		this.changeColor = () => {
			//发布者发出消息
			// debugger;
			eventProxy.trigger('message', 'childTwo has been mounted');
		}
	}
	componentDidMount () {
		console.log(eventProxy);
		//发布者发出消息
		// debugger;
		eventProxy.trigger('message', 'childTwo has been mounted');
	}
	render () {
		return(
			<div onClick={this.changeColor}>
				<div className='childTwo'>childTwo 点我看console</div>
			</div>
		)
	}
}

class ChildThree extends Component{
	constructor () {
		super();
	}
	componentDidMount () {
		eventProxy.on('message', message => {console.log('childThree:' + message)});
	}
	render () {
		return (
			<div className="child_three">childThree</div>
		)
	}
}
// componentDidUpdate 与 render 方法与上例一致
class Child_1 extends Component{
  componentDidMount() {
    setTimeout(() => {
      // 发布 msg 事件
      eventProxy.trigger('msg', 'end');
    }, 1000);
  }
  render() {
  	return(
  		<div>Child_1</div>
  	);
  }
}
// componentDidUpdate 方法与上例一致
class Child_2 extends Component{
  state = {
    msg: 'start'
  };

  componentDidMount() {
  	// 监听 msg 事件
    eventProxy.on('msg', (msg) => {
      this.setState({
        msg
      });
    });
  }

  render() {
    return (
	    <div>
	      	<p>child_2 component: {this.state.msg}</p>
	    </div>
    );
  }
}
export default template({
	id: 'spread',
	component: Main,
	url: ''
})