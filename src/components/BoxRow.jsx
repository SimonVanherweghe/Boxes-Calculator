import React, {
  PropTypes
} from 'react';

const {object} = PropTypes;

const BoxRow = ({box}) => (<tr>
  <td>{box.amount}</td>
  <td>{box.size.width}</td>
  <td>{box.size.height}</td>
</tr>);

BoxRow.propTypes = {
  box: object.isRequired,
};


export default BoxRow;