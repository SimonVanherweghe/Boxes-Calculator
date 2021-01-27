import React from "react";
import PropTypes from "prop-types";

const Controls = ({
  sawWidth,
  groove,
  depth,
  onChangeSawwidth,
  onChangeGroove,
  onChangeDepth,
}) => {
  const handleSawWidthChange = (e) => {
    const value = parseInt(e.currentTarget.value, 10);
    onChangeSawwidth(value);
  };

  const handleGrooveChange = (e) => {
    const value = parseInt(e.currentTarget.value, 10);
    onChangeGroove(value);
  };

  const handleDepthChange = (e) => {
    const value = parseInt(e.currentTarget.value, 10);
    onChangeDepth(value);
  };

  return (
    <section className="controls">
      <h2>Opties</h2>
      <label htmlFor="depth">
        <span>Diepte box</span>
        <input
          type="number"
          id="depth"
          name="depth"
          value={depth}
          onChange={handleDepthChange}
        />
        mm
      </label>
      <label htmlFor="sawWidth">
        <span>Zaagbreedte</span>
        <input
          type="number"
          id="sawWidth"
          name="sawWidth"
          value={sawWidth}
          onChange={handleSawWidthChange}
        />
        mm
      </label>
      <label htmlFor="groove">
        <span>Diepte groef</span>
        <input
          type="number"
          id="groove"
          name="groove"
          value={groove}
          onChange={handleGrooveChange}
        />
        mm
      </label>
    </section>
  );
};

Controls.propTypes = {
  onChangeSawwidth: PropTypes.func.isRequired,
  onChangeGroove: PropTypes.func.isRequired,
  onChangeDepth: PropTypes.func.isRequired,

  sawWidth: PropTypes.number.isRequired,
  groove: PropTypes.number.isRequired,
  depth: PropTypes.number.isRequired,
};

export default Controls;
