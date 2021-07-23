"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _server = require("react-dom/server");

var _CountUp = _interopRequireDefault(require("./components/CountUp"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// React ElementをHTMLに変換
var ssr = function ssr() {
  return "\n  <html>\n    <head>\n      <title>CountUp</title>\n      <meta charset=\"utf-8\" />\n    </head>\n    <body>\n      <div id=\"app\">\n        ".concat((0, _server.renderToString)( /*#__PURE__*/_react["default"].createElement(_CountUp["default"], null)), "\n      </div>\n      <script src=\"./client.js\"></script>\n    </body>\n  </html>\n");
};

var _default = ssr;
exports["default"] = _default;