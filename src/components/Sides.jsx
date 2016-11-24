import React, {
  PropTypes
} from 'react';

const {array, number} = PropTypes;

import PiecesList from './PiecesList';
import SawSheme from './../containers/SawSheme';

const Sides = ({sides, sawWidth}) => (
  <section>
    <h2>Zijkanten</h2>
    <PiecesList pieces={sides} />
    <SawSheme pieces={sides} sawWidth={sawWidth} safezone={10} />
  </section>
);

Sides.propTypes = {
  sides: array.isRequired,
  sawWidth: number.isRequired
};

export default Sides;