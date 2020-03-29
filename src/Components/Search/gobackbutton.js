import React from 'react';
import PropTypes from 'prop-types';
/**
 * @description Button Component witch Function attached
 * @param  {} {goBack} Function triggering router to go back to index page
 */
const GoBackButton = ({ goBack }) => (
  <button className="close-search" type="submit" onClick={() => goBack()}>
    Close
  </button>
);

GoBackButton.propTypes = {
  goBack: PropTypes.func.isRequired,
};

export default GoBackButton;
