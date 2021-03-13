import React from "react";
import PropTypes from "prop-types";

const FadeIn = ({
  max = 1,
  min = 0,
  duration = 1,
  shown,
  children,
  style,
  ...rest
}) => (
  <div
    className="fadeIn"
    style={{
      opacity: shown ? max : min,
      transition: `opacity ${duration}s`,
      ...style,
    }}
    {...rest}
  >
    {children}
  </div>
);

FadeIn.propTypes = {
  shown: PropTypes.bool,
  children: PropTypes.node.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
  duration: PropTypes.number,
  style: PropTypes.object,
  fadeIn: PropTypes.bool,
};

export default FadeIn;
