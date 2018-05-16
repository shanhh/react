import React from 'react'
import PropTypes from 'prop-types'
import './index.less'

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
}