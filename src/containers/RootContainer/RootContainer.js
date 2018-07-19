import React from 'react';

class RootContainer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
    return ;
  }
  render () {
    return (
      <React.Fragment>
        <h1>{ "RootContainer" }</h1>
      </React.Fragment>
    )
  }
}

export default RootContainer;
