import React from 'react'
import PropTypes from 'prop-types'
import './index.less'
import connect from 'connect'
@connect

export default class extends React.Component {
  constructor (prop) {
    super(prop)
    this.state = {
      title: '提示',
      btn: '确定',
      show: false
    }
    this.success = this.success.bind(this)
  }
  static propTypes = {
    show: PropTypes.bool,
    content: PropTypes.string,
    success: PropTypes.func
  }
  static defaultProps = {
    content: '',
    success: function () {}
  }
  componentWillReceiveProps (nextProps) {
    this.setState({
      show: nextProps.show
    })
  }
  success () {
    this.setState({
      show: false
    })
    const {success, hideAlert} = this.props
    hideAlert()
    success && success()
  }
  render () {
    let {title, btn, show} = this.state
    console.log(show)
    const {content} = this.props
    console.log(content)
    const result = show ? (
      <div className="dialog-wrapper">
        <div className="dialog-box">
          <div className="dialog-hd">
              <strong>{title}</strong>
          </div>
          <div className="dialog-bd">{content}</div>
          <div className="dialog-ft border-half-top" onClick={this.success()}>{btn}</div>
        </div>
      </div>
    ) : ''
    return result
  }
}