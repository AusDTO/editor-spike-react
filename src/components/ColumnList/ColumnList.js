import React, { Component, PropTypes } from 'react';

export default class ColumnList extends Component {
  render() {
    return (
      <div className="ColumnList">
        Column list
      </div>
    );
  }
}

ColumnList.propTypes = {
  block: PropTypes.object.isRequired
};
