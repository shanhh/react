import React, {Component, PropTypes} from 'react';
import {Header, template} from './common/mixin';

class Main extends Component {
	constructor (props) {
		super(props);
		this.state = {
			list:[{title:'点我进入编辑模式'}],
			title:''
		}
		this.addHandle = (e) => {
			let list = this.state.list;
			list = list.concat([{title: this.state.title}]);
			this.setState({list:list, title:''});
		}
		this.changeHandle = (e) => {
			this.setState({title: e.target.value});
		}
		this.delHandle = (index) => {
			console.log(index);
			let list = this.state.list;
			list.splice(index, 1);
			this.setState({});
		}
		this.changeItem = (item, e) => {
			item.title = e.target.value;
			this.setState({});
		}
		this.blurHandle = (item) => {
			item.edit = !item.edit;
			this.setState({});
		}
		this.toEdit = (item) => {
			item.edit = !item.edit;
			console.log(item.edit);
			this.setState({});
		}
	}
	render () {
		console.log(123);
		return(
			<div>
				<Header nav title='reactDemo'/>
				<div className="react_demo">
					<input type="text" value={this.state.title} onKeyDown={(e) => {e.keyCode == 13 ? this.addHandle(e):undefined}} placeholder="请输入标题" onChange={this.changeHandle} />
					<button onClick={this.addHandle}>添加</button>
				</div>
				<div className="preview">{this.state.title}</div>
				<div className="list">
					{
						this.state.list.map((item, index) => {
							return (
								<a key={index}>
									{ item.edit ? <input type='text' onKeyDown={(e) => {e.keyCode==13?this.toEdit(item):undefined}} onBlur={this
									.blurHandle.bind(this,item)} autoFocus onChange={this.changeItem.bind(this, item)} value={item.title} /> : <span onClick={this.toEdit.bind(this, item)}>{item.title}</span>}
									<button onClick={this.delHandle.bind(this,index)}>删除</button>
								</a>
							);
						})
					}
				</div>
			</div>
		)
	}
}

export default template({
	id: 'reactDemo',
	component: Main,
	url: ''
})