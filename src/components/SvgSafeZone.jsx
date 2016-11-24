import React, {
  PropTypes
} from 'react';

const {number, object} = PropTypes;

const SvgSafeZone = ({y, plate, safe}) => (
  <rect x={safe / 2} y={y + (safe / 2)} width={plate.width - safe} height={plate.height - safe} className='safezone' strokeWidth={safe} />
);

SvgSafeZone.propTypes = {
  y: number.isRequired,
  plate: object.isRequired,
  safe: number.isRequired
};


export default SvgSafeZone;