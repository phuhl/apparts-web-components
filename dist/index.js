Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var PropTypes = _interopDefault(require('prop-types'));
var formik = require('formik');

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var Button = function Button(_ref) {
  var submit = _ref.submit,
      loading = _ref.loading,
      disabled = _ref.disabled,
      props = _objectWithoutProperties(_ref, ["submit", "loading", "disabled"]);

  return /*#__PURE__*/React.createElement("button", _extends({
    className: (loading ? "loading " : "") + (submit ? "submit " : "") + "button"
  }, props, {
    disabled: loading || disabled,
    type: submit && "submit"
  }));
};

Button.propTypes = {
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  submit: PropTypes.bool
};

var ErrorMessage = function ErrorMessage(_ref) {
  var message = _ref.message;
  return message ? /*#__PURE__*/React.createElement("div", {
    className: "errorMessage"
  }, message) : null;
};

ErrorMessage.propTypes = {
  message: PropTypes.string
};

var FadeIn = function FadeIn(_ref) {
  var _ref$max = _ref.max,
      max = _ref$max === void 0 ? 1 : _ref$max,
      _ref$min = _ref.min,
      min = _ref$min === void 0 ? 0 : _ref$min,
      _ref$duration = _ref.duration,
      duration = _ref$duration === void 0 ? 1 : _ref$duration,
      shown = _ref.shown,
      children = _ref.children,
      style = _ref.style,
      rest = _objectWithoutProperties(_ref, ["max", "min", "duration", "shown", "children", "style"]);

  return /*#__PURE__*/React.createElement("div", _extends({
    className: "fadeIn",
    style: _objectSpread2({
      opacity: shown ? max : min,
      transition: "opacity ".concat(duration, "s")
    }, style)
  }, rest), children);
};

FadeIn.propTypes = {
  shown: PropTypes.bool,
  children: PropTypes.node.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
  duration: PropTypes.number,
  style: PropTypes.object,
  fadeIn: PropTypes.bool
};

var Input = function Input(_ref) {
  var label = _ref.label,
      error = _ref.error,
      name = _ref.name,
      props = _objectWithoutProperties(_ref, ["label", "error", "name"]);

  return /*#__PURE__*/React.createElement("div", {
    className: "inputField"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: name
  }, label), /*#__PURE__*/React.createElement("input", _extends({}, props, {
    name: name,
    id: name
  })), /*#__PURE__*/React.createElement(ErrorMessage, {
    message: error
  }));
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  error: PropTypes.string
};

var If = function If(_ref) {
  var children = _ref.children,
      test = _ref.test;

  var _useFormikContext = formik.useFormikContext(),
      values = _useFormikContext.values;

  return /*#__PURE__*/React.createElement(React.Fragment, null, test(values) ? children : null);
};

If.propTypes = {
  test: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};

var IfElse = function IfElse(_ref2) {
  var then = _ref2.then,
      elze = _ref2.elze,
      test = _ref2.test;

  var _useFormikContext2 = formik.useFormikContext(),
      values = _useFormikContext2.values;

  return /*#__PURE__*/React.createElement(React.Fragment, null, test(values) ? then : elze);
};

IfElse.propTypes = {
  then: PropTypes.node.isRequired,
  elze: PropTypes.node.isRequired,
  test: PropTypes.func.isRequired
};

var GlobalError = function GlobalError(_ref) {
  var message = _ref.message,
      rest = _objectWithoutProperties(_ref, ["message"]);

  var _useFormikContext = formik.useFormikContext(),
      errors = _useFormikContext.errors,
      touched = _useFormikContext.touched;

  var keysTouched = Object.keys(touched);
  var error = Object.keys(errors).filter(function (key) {
    return keysTouched.indexOf(key) !== -1;
  }).length > 0;
  return /*#__PURE__*/React.createElement(ErrorMessage, _extends({}, rest, {
    message: error && message
  }));
};

GlobalError.propTypes = {
  message: PropTypes.string.isRequired
};

var FieldRow = function FieldRow(_ref) {
  var children = _ref.children,
      containerStyle = _ref.containerStyle,
      rowStyle = _ref.rowStyle,
      _ref$margin = _ref.margin,
      margin = _ref$margin === void 0 ? 5 : _ref$margin,
      _ref$minWidth = _ref.minWidth,
      minWidth = _ref$minWidth === void 0 ? 200 : _ref$minWidth;
  return /*#__PURE__*/React.createElement("div", {
    style: _objectSpread2({
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      margin: -margin
    }, containerStyle)
  }, React.Children.toArray(children).map(function (field, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: _objectSpread2({
        margin: margin,
        flex: 1,
        minWidth: minWidth
      }, rowStyle)
    }, field);
  }));
};

FieldRow.propTypes = {
  children: PropTypes.node.isRequired,
  minWidth: PropTypes.number,
  containerStyle: PropTypes.object,
  rowStyle: PropTypes.object,
  margin: PropTypes.number
};

var FormikInput = function FormikInput(_ref) {
  var label = _ref.label,
      name = _ref.name,
      props = _objectWithoutProperties(_ref, ["label", "name"]);

  return /*#__PURE__*/React.createElement("div", {
    className: "inputField"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: name
  }, label), /*#__PURE__*/React.createElement(formik.Field, _extends({}, props, {
    name: name,
    id: name
  })), /*#__PURE__*/React.createElement(formik.ErrorMessage, {
    name: name,
    render: function render(msg) {
      return /*#__PURE__*/React.createElement(ErrorMessage, {
        message: msg
      });
    }
  }));
};

FormikInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

exports.Button = Button;
exports.ErrorMessage = ErrorMessage;
exports.FadeIn = FadeIn;
exports.FormikInput = FormikInput;
exports.GlobalError = GlobalError;
exports.If = If;
exports.IfElse = IfElse;
exports.Input = Input;
exports.Row = FieldRow;
//# sourceMappingURL=index.js.map
