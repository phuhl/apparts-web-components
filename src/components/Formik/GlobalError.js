import React from "react";
import PropTypes from "prop-types";
import { useFormikContext } from "formik";
import ErrorMessage from "../ErrorMessage";

const GlobalError = ({ message, ...rest }) => {
  const { errors, touched } = useFormikContext();
  const keysTouched = Object.keys(touched);
  const error =
    Object.keys(errors).filter((key) => keysTouched.indexOf(key) !== -1)
      .length > 0;
  return <ErrorMessage {...rest} message={error && message} />;
};
GlobalError.propTypes = {
  message: PropTypes.string.isRequired,
};

export default GlobalError;
