import React from 'react';
import PropTypes from 'prop-types';


const SvgPlate = ({y, plate}) => (
  <rect x={0} y={y} width={plate.width} height={plate.height} className='plate' />
);

SvgPlate.propTypes = {
  y: PropTypes.number.isRequired,
  plate: PropTypes.object.isRequired,
};

export default SvgPlate;