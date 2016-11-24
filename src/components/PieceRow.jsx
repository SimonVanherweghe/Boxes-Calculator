import React, {
  PropTypes
} from 'react';

const {array} = PropTypes;

const PieceRow = ({piece}) => (
  <tr>
    <td>{piece[0]}</td>
    <td>{piece[1].length}</td>
    <td>{piece[1][0].size1}</td>
    <td>{piece[1][0].size2}</td>
  </tr>
);

PieceRow.propTypes = {
  piece: array.isRequired,
};

export default PieceRow;