import React from "react";
import PropTypes from "prop-types";

const FieldRow = ({
  children,
  containerStyle,
  rowStyle,
  margin = 5,
  minWidth = 200,
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        margin: -margin,
        ...containerStyle,
      }}
    >
      {React.Children.toArray(children).map((field, i) => (
        <div key={i} style={{ margin, flex: 1, minWidth, ...rowStyle }}>
          {field}
        </div>
      ))}
    </div>
  );
};
FieldRow.propTypes = {
  children: PropTypes.node.isRequired,
  minWidth: PropTypes.number,
  containerStyle: PropTypes.object,
  rowStyle: PropTypes.object,
  margin: PropTypes.number,
};

export default FieldRow;
