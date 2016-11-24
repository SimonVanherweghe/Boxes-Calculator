import React, {PropTypes} from 'react';

const {number} = PropTypes;

const SvgSawLine = ({y, length, strokeWidth}) => (<line x1={0} x2={length} y1={y + (strokeWidth / 2)} y2={y + (strokeWidth / 2)} strokeWidth={strokeWidth} className='sawline' />);

SvgSawLine.propTypes = {
  y: number.isRequired,
  length: number.isRequired,
  strokeWidth: number.isRequired
};

export default SvgSawLine;