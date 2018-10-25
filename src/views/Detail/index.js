import React, { Component } from 'react';

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return (
      <div>
        详情页面
      </div>
    );
  }
}

export default Detail;