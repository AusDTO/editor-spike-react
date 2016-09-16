import React, { Component } from 'react';

export default class CommonEditControls extends Component {
  render () {
    let { children } = this.props;
    return (
      <div className="common-edit-controls">
        { children }
      </div>
    );
  }
}

