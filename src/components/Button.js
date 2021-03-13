import React from "react";
import PropTypes from "prop-types";

const Button = ({ submit, loading, disabled, ...props }) => {
  return (
    <button
      className={
        (loading ? "loading " : "") + (submit ? "submit " : "") + "button"
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
};

export default Button;
