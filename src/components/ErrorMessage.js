import React from "react";
import PropTypes from "prop-types";

const ErrorMessage = ({ message }) =>
  message ? <div className="errorMessage">{message}</div> : null;
ErrorMessage.propTypes = {
  message: PropTypes.string,
};

export default ErrorMessage;
