import React from 'react';
import PropTypes from 'prop-types';
const {array, number} = PropTypes;

import PiecesList from './PiecesList';
import SawSheme from './../containers/SawSheme';

const Backs = ({backs, sawWidth}) => (
  <section>
    <h2>Achterkanten</h2>
    <PiecesList pieces={backs} />
    <SawSheme pieces={backs} sawWidth={sawWidth} />
  </section>
);

Backs.propTypes = {
  backs: array.isRequired,
  sawWidth: number.isRequired,
};


export default Backs;