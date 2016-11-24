import React, {Component} from 'react';

import BoxesTable from './../components/BoxesTable';
import Sides from './../components/Sides';
import Backs from './../components/Backs';
import Controls from './Controls';

import {calculateSides, calculateBacks} from './../utils/utils';

class App extends Component {

  state = {
    blocks: [],
    depth: 350,
    fetched: false,
    sawWidth: 4,
    groove: 9,
  }

  componentDidMount() {
    fetch(`input.json`).then(r => r.json()).then(d => this.parse(d));
  }

  parse(data) {
    this.setState(data);
    this.setState({fetched: true});
  }
  
  handleChangeSawWidth = sawWidth => {
    this.setState({sawWidth});
  }
  
  handleChangeGroove = groove => {
    this.setState({groove});
  }
  
  handleChangeDepth = depth => {
    this.setState({depth});
  }

  render() {
    if (this.state.fetched) {
      const {blocks, depth, sawWidth, groove} = this.state;
      const sides = calculateSides(blocks, depth);
      const backs = calculateBacks(blocks, groove);
      return (
        <div className='App'>
          <header className='App-header'>
            <h1>Boxes Calculator</h1>
          </header>
          <main>
            <div className='row'>
            <Controls sawWidth={sawWidth} groove={groove} depth={depth} onChangeSawwidth={this.handleChangeSawWidth} onChangeGroove={this.handleChangeGroove}
            onChangeDepth={this.handleChangeDepth} />
            <BoxesTable boxes={blocks} />
          </div>
            <Sides sides={sides} sawWidth={sawWidth} />
            <Backs backs={backs} sawWidth={sawWidth} />
          </main>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default App;
