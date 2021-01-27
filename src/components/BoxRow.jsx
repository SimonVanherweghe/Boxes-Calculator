import React from "react";
import PropTypes from "prop-types";

const BoxRow = ({ box }) => (
  <tr>
    <td>{box.amount}</td>
    <td>{box.size.width}</td>
    <td>{box.size.height}</td>
  </tr>
);

BoxRow.propTypes = {
  box: PropTypes.object.isRequired,
};

export default BoxRow;
