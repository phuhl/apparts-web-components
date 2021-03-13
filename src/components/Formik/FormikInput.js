import React from "react";
import PropTypes from "prop-types";
import { Field, ErrorMessage as FErrorMessage } from "formik";
import ErrorMessage from "../ErrorMessage";

const FormikInput = ({ label, name, ...props }) => (
  <div className="inputField">
    <label htmlFor={name}>{label}</label>
    <Field {...props} name={name} id={name} />
    <FErrorMessage
      name={name}
      render={(msg) => <ErrorMessage message={msg} />}
    />
  </div>
);
FormikInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default FormikInput;
