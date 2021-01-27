import React from "react";
import PropTypes from "prop-types";


import PiecesList from "./PiecesList";
import SawSheme from "./../containers/SawSheme";
import { calculateSides } from "../utils/utils";

const Sides = ({ blocks, depth, sawWidth }) => {
  const sides = calculateSides(blocks, depth);

  return (
    <section>
      <h2>Zijkanten</h2>
      <PiecesList pieces={sides} />
      <SawSheme pieces={sides} sawWidth={sawWidth} safezone={10} />
    </section>
  );
};

Sides.propTypes = {
  blocks: PropTypes.array.isRequired,
  depth: PropTypes.number.isRequired,
  sawWidth: PropTypes.number.isRequired,
};

export default Sides;
