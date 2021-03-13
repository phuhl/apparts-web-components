import React from "react";
import PropTypes from "prop-types";
import { FormikConsumer } from "formik";

const IfDirty = ({ children }) => (
  <FormikConsumer>
    {(formik) => (Object.keys(formik.touched).length > 0 ? children : null)}
  </FormikConsumer>
);
IfDirty.propTypes = {
  children: PropTypes.node,
};

export default IfDirty;
