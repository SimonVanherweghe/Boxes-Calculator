import React from 'react';
import PropTypes from 'prop-types';


const SvgSafeZone = ({y, plate, safe}) => (
  <rect x={safe / 2} y={y + (safe / 2)} width={plate.width - safe} height={plate.height - safe} className='safezone' strokeWidth={safe} />
);

SvgSafeZone.propTypes = {
  y: PropTypes.number.isRequired,
  plate: PropTypes.object.isRequired,
  safe: PropTypes.number.isRequired
};


export default SvgSafeZone;