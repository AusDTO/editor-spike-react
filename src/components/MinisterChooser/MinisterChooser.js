import React, { Component, PropTypes } from 'react';
import Modal from 'react-modal';

import './MinisterChooser.css';

const customStyles = {
};

class MinisterChooser extends Component {

  closeModal() {
    // TODO: fire a close event
  }

  renderMinisters() {
    let { ministers } = this.props;
    return ministers.map(minister => {
      return (
        <li key={minister.id}>
          <p>
            <button onClick={this.chooseMinister.bind(this, minister)}>Choose</button>
            {minister.name}
          </p>
        </li>
      );
    });
  }

  render () {
    let { block } = this.props;
    return (
      <Modal
        isOpen={!!block}
        onRequestClose={this.closeModal.bind(this)}
        style={customStyles}
      >
        <div className="MinisterChooser">
          <h3 ref="subtitle">Choose a minister</h3>
          <ul>
            { this.renderMinisters() }
          </ul>
        </div>
      </Modal>
    );
  }

  chooseMinister(minister) {
    let { onMinisterChosen, block } = this.props;
    onMinisterChosen(block, minister);
  }
}

MinisterChooser.propTypes = {
  ministers: PropTypes.array.isRequired,
  block: PropTypes.object,
  onMinisterChosen: PropTypes.func.isRequired
};

export default MinisterChooser;
