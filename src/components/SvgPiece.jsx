import React from 'react';
import PropTypes from 'prop-types';

const {object} = PropTypes;

const SvgPiece = ({piece}) => (
  <g>
    <rect width={piece.size1} height={piece.size2} x={piece.x} y={piece.y} />
    <text x={piece.x + 5} y={piece.y + 20} fontSize='20'>{piece.name}</text>
    <text x={piece.x + 5} y={piece.y + 40} fontSize='20'>{piece.size1}x{piece.size2}</text>
  </g>
);

SvgPiece.propTypes = {
  piece: object.isRequired,
};

export default SvgPiece;