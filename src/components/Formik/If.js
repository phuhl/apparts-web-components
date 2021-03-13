import React from "react";
import PropTypes from "prop-types";
import { useFormikContext } from "formik";

const If = ({ children, test }) => {
  const { values } = useFormikContext();
  return <>{test(values) ? children : null}</>;
};
If.propTypes = {
  test: PropTypes.func,
  children: PropTypes.node
};

const IfElse = ({ then, elze, test }) => {
  const { values } = useFormikContext();
  return <>{test(values) ? then : elze}</>;
};
IfElse.propTypes = {
  then: PropTypes.node,
  elze: PropTypes.node,
  test: PropTypes.func
};

export {If, IfElse};
