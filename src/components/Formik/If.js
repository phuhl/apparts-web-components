import React from "react";
import PropTypes from "prop-types";
import { useFormikContext } from "formik";

const If = ({ children, test }) => {
  const { values } = useFormikContext();
  return <>{test(values) ? children : null}</>;
};
If.propTypes = {
  test: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

const IfElse = ({ then, elze, test }) => {
  const { values } = useFormikContext();
  return <>{test(values) ? then : elze}</>;
};
IfElse.propTypes = {
  then: PropTypes.node.isRequired,
  elze: PropTypes.node.isRequired,
  test: PropTypes.func.isRequired,
};

export { If, IfElse };
