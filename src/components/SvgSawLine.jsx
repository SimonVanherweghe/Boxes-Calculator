import React from 'react';
import PropTypes from 'prop-types';


const SvgSawLine = ({ y, length, strokeWidth }) => (<line x1={0} x2={length} y1={y + (strokeWidth / 2)} y2={y + (strokeWidth / 2)} strokeWidth={strokeWidth} className='sawline' />);

SvgSawLine.propTypes = {
  y: PropTypes.number.isRequired,
  length: PropTypes.number.isRequired,
  strokeWidth: PropTypes.number.isRequired
};

export default SvgSawLine;