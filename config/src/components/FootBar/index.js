import React from 'react'
import './index.less'
import Icon from '../Icon-svg'
import { NavLink } from 'react-router-dom'

class FootBar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      footerBarList: [
        {title: '首页', icon: 'home', path: '/'},
        {title: '西瓜视频', icon: 'video', path: '/video'},
        {title: '微头条', icon: 'comment', path: '/headline'},
        {title: '我的', icon: 'account1', path: '/mine'}
      ],
      currentIndex: 0
    }
    this.skipView = this.skipView.bind(this)
  }
  skipView (path, index) {
    this.setState({
      currentIndex: index
    })
  }
  render () {
    const { footerBarList, currentIndex } = this.state;
    return (
      <footer className="footerbar-wrapper">
          {
            footerBarList.map((item, index) => 
              <NavLink
                to={item.path}
                activeStyle={{
                  color: 'red'
                }}
                key={index} 
                >
                  <Icon iconName={item.icon}></Icon>
                  <div>{item.title}</div>
              </NavLink>
            )
          }
      </footer>
    )
  }
}
export default FootBar;