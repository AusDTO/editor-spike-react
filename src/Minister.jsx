import React, { Component } from 'react';
import HTMLTagElement from './HTMLTagElement';

const MINISTERS = [
  {
    id: 1,
    name: "Senator the Hon Mitch Fifield",
    title: "Minister for Communications",
    image: "https://raw.githubusercontent.com/AusDTO/gov-au-images/master/ministers/mitch-fifield-260x140.png"
  },
  {
    id: 2,
    name: "Senator the Hon Fiona Nash",
    title: "Minister for Regional Communications",
    image: "https://raw.githubusercontent.com/AusDTO/gov-au-images/master/ministers/fiona-nash-260x140.jpg"
  }
];

class MinisterChooser extends Component {
  constructor() {
    super();
    this.state = {
      ministers: MINISTERS,
      mode: 'display'
    };
  }

  showChoices () {
    this.setState({mode: 'selecting'});
  }

  optionSelected(evt) {
    this.props.onChoose(MINISTERS.find(m => m.id == evt.target.value));
    this.setState({mode: 'display'});
  }

  renderOptions() {
    return this.state.ministers.map((minister) => {
      return <option key={minister.id} value={minister.id}>{minister.name}</option>
    });
  }


  render () {
    if (this.state.mode == 'display') {
      return (
        <h3 onClick={this.showChoices.bind(this)}>{this.props.minister.name}</h3>
      );
    } else {
      return (
        <select onChange={this.optionSelected.bind(this)} value={this.props.minister.id}>
          { this.renderOptions() }
        </select>
      );
    }
  }
}

export default class Minister extends Component {

  constructor () {
    super()
    this.state = {
      minister: MINISTERS[0],
    };
  }

  onMinisterChosen(minister) {
    this.setState((previousState, props) => {
      return { minister: minister };
    });
  }

  render () {
    return (
      <div>
        <figure>
          <img src={this.state.minister.image} />
        </figure>
        <article>
          <MinisterChooser onChoose={this.onMinisterChosen.bind(this)} minister={this.state.minister} />
          <p>{this.state.minister.title}</p>
        </article>
      </div>
    );
  }
}
