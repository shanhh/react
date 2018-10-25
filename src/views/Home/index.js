import React from 'react'
import connect from 'connect'

@connect
class Home extends React.Component { 
  constructor (props) {
    super(props)
    this.showAlert = this.showAlert.bind(this)
  }
  showAlert () {
    console.log(this.props)
  
    const {showAlert} = this.props
    showAlert({
      content: '测试'
    })
  }
  goDetail () {
    // this.props.history.push({pathname: `/detail`,state:{a: 1}})
    this.props.history.push(`/detail/123/16`)
  }
  render () {
    return (
      <div className="home">
        首页
        <div onClick={(e) => {this.goDetail()}}>点击跳转到详情</div>
        <button onClick={this.showAlert}>出弹框</button>
      </div>
    )
  }
}
export default Home