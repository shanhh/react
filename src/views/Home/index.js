import React from 'react'
import connect from 'connect'
class Home extends React.Component { 
  constructor (props) {
    super(props)
    this.showAlert = this.showAlert.bind(this)
  }
  showAlert () {
    console.log(this.props)
  
    const {showAlert} = this.props
  }
  render () {
    return (
      <div className="home">
        首页
        <button onClick={this.showAlert}>出弹框</button>
      </div>
    )
  }
}
export default Home