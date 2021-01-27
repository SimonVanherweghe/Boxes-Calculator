import React from 'react';
import PropTypes from 'prop-types';

import BoxRow from './../components/BoxRow';

const BoxesTable = ({boxes}) => (
  <section>
    <h2>Boxes</h2>
    <table>
      <thead>
        <tr>
          <th>Aantal</th>
          <th>Breedte</th>
          <th>Hoogte</th>
        </tr>
      </thead>
      <tbody>
        {boxes.map((box, i) => <BoxRow key={i} box={box} />)}
      </tbody>
    </table>
  </section>
);

BoxesTable.propTypes = {
  boxes: PropTypes.array.isRequired,
};

export default BoxesTable;