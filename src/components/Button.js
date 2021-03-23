import React from "react";
import PropTypes from "prop-types";

const Button = ({ submit, loading, disabled, className = "", ...props }) => {
  return (
    <button
      className={
        (loading ? "loading " : "") +
        (submit ? "submit " : "") +
        "button " +
        className
      }
      {...props}
      disabled={loading || disabled}
      type={submit && "submit"}
    />
  );
};
Button.propTypes = {
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  submit: PropTypes.bool,
  className: PropTypes.string,
};

export default Button;
