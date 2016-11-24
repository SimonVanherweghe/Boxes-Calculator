import React, {
  PropTypes
} from 'react';

const {array} = PropTypes;

import {groupPieces} from './../utils/utils.js';
import PieceRow from './PieceRow.jsx';

const PiecesList = ({pieces}) => (
  <article>
    <h3>Houtlijst</h3>
    <table>
      <thead>
        <tr>
          <th>Benaming</th>
          <th>Aantal</th>
          <th>Breedte</th>
          <th>Hoogte</th>
        </tr>
      </thead>
      <tbody>
        {groupPieces(pieces).map((piece, i) => <PieceRow key={i} piece={piece} />)}
      </tbody>
    </table>
  </article>
);

PiecesList.propTypes = {
  pieces: array.isRequired,
};

export default PiecesList;