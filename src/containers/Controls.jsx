import React, {
  PropTypes
} from 'react';

const {number, func} = PropTypes;

class Controls extends React.Component {

  handleSawWidthChange = e => {
    const {onChangeSawwidth} = this.props;
    const value = parseInt(e.currentTarget.value, 10); 
    onChangeSawwidth(value);
  }
  
  handleGrooveChange = e => {
    const {onChangeGroove} = this.props;
    const value = parseInt(e.currentTarget.value, 10); 
    onChangeGroove(value);
  }
  
  handleDepthChange = e => {
    const {onChangeDepth} = this.props;
    const value = parseInt(e.currentTarget.value, 10); 
    onChangeDepth(value);
  }

  render() {
    const {sawWidth, groove, depth} = this.props;
    return (<section className='controls'>
      <h2>Opties</h2>
      <label htmlFor='depth'>
        <span>Diepte box</span>
        <input type='number' id='depth' name='depth' value={depth} onChange={this.handleDepthChange} />mm
      </label>
      <label htmlFor='sawWidth'>
        <span>Zaagbreedte</span>
        <input type='number' id='sawWidth' name='sawWidth' value={sawWidth} onChange={this.handleSawWidthChange} />mm
      </label>
      <label htmlFor='groove'>
        <span>Diepte groef</span>
        <input type='number' id='groove' name='groove' value={groove} onChange={this.handleGrooveChange} />mm
      </label>
    </section>);
  }
}

Controls.propTypes = {
  onChangeSawwidth: func.isRequired,
  onChangeGroove: func.isRequired,
  onChangeDepth: func.isRequired,

  sawWidth: number.isRequired,
  groove: number.isRequired,
  depth: number.isRequired
};


export default Controls;
