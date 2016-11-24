import React, {
  PropTypes
} from 'react';

const {number, object} = PropTypes;

const SvgPlate = ({y, plate}) => (
  <rect x={0} y={y} width={plate.width} height={plate.height} className='plate' />
);

SvgPlate.propTypes = {
  y: number.isRequired,
  plate: object.isRequired,
};

export default SvgPlate;