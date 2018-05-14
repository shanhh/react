import React from 'react'

class IconSvg extends React.Component {
  render () {
    let {iconName} = this.props
    return (
      <svg className="icon" aria-hidden="true">
        <use xlinkHref={`#icon-${iconName}`}></use>
      </svg>
    )
  } 
}
export default IconSvg