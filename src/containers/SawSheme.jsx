import React from 'react';
import PropTypes from 'prop-types';

const {number, array} = PropTypes;

import SvgPiece from './../components/SvgPiece.jsx';
import SvgSawLine from './../components/SvgSawLine.jsx';
import SvgPlate from './../components/SvgPlate.jsx';
//import SvgSafeZone from './../components/SvgSafeZone.jsx';
import calculatePositions from './../utils/calculatePositions.js';

const SawSheme = ({safezone, pieces, sawWidth}) => {
  if (!safezone) {
    safezone = 0;
  }
  const plate = {
    width: 2440 - (safezone * 2),
    height: 1220 - (safezone * 2),
    space: 50
  };
  const {pieces: positionedPieces, plates, sawLines} = calculatePositions(pieces, plate, sawWidth, safezone);

  return (<article>
        <h3>Zaagplan</h3>
        <svg className='svg' viewBox={`0 0 2500 ${plates.length * (plate.height + plate.space)}`} preserveAspectRatio='xMinYMin meet'>

          {positionedPieces.map((piece, i) => <SvgPiece key={i} piece={piece} />)}
          {sawLines.map((line, i) => <SvgSawLine key={i} y={line} length={plate.width} strokeWidth={sawWidth} />)}
          {plates.map((line, i) => <SvgPlate key={i} y={line} plate={plate} />)}
          {/* {plates.map((line, i) => <SvgSafeZone key={i} y={line} plate={plate} safe={safezone}/>)} */}
        </svg>
      </article>);
  
};

SawSheme.propTypes = {
  safezone: number,
  pieces: array.isRequired,
  sawWidth: number.isRequired,
};

export default SawSheme;
