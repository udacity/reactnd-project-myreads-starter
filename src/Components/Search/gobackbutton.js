import React from 'react';
import PropTypes from 'prop-types';

const GoBackButton = ({ goBack }) => (
  <button className="close-search" onClick={() => goBack()}>
    Close
  </button>
);

GoBackButton.propTypes = {
  goBack: PropTypes.func.isRequired,
};

export default GoBackButton;
