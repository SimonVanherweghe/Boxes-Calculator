import React from "react";
import PropTypes from "prop-types";


import PiecesList from "./PiecesList";
import SawSheme from "./../containers/SawSheme";
import { calculateBacks } from "../utils/utils";

const Backs = ({ blocks, groove, sawWidth }) => {
  const backs = calculateBacks(blocks, groove);
  return (
    <section>
      <h2>Achterkanten</h2>
      <PiecesList pieces={backs} />
      <SawSheme pieces={backs} sawWidth={sawWidth} />
    </section>
  );
};

Backs.propTypes = {
  blocks: PropTypes.array.isRequired,
  groove: PropTypes.number.isRequired,
  sawWidth: PropTypes.number.isRequired,
};

export default Backs;
