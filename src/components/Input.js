import React from "react";
import PropTypes from "prop-types";
import ErrorMessage from "./ErrorMessage";

const Input = ({ label, error, name, ...props }) => (
  <div className="inputField">
    <label htmlFor={name}>{label}</label>
    <input {...props} name={name} id={name} />
    <ErrorMessage message={error} />
  </div>
);
Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  error: PropTypes.string,
};

export default Input;
