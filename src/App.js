import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import './App.css';
import Editor from './Editor.js';

class App extends Component {
  render() {
    let { document } = this.props;
    return (
      <div className="App">
        <Editor document={document}/>
      </div>
    );
  }
}

App.propTypes = {
  document: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    document: state.document
  }
}

export default connect(mapStateToProps)(App);
