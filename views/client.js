"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = require("react-dom");

var _CountUp = _interopRequireDefault(require("./components/CountUp"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// エントリポイントの作成
// SSRでないReactアプリはrender()を使用してUIを描画するが、SSRを使用してサーバ
// で描画されている場合はhydrate()を使用し、サーバで描画した部分をブラウザで再描画しないようにします。
// idがappの部分をhydrateで描画する
(0, _reactDom.hydrate)( /*#__PURE__*/_react["default"].createElement(_CountUp["default"], null), document.querySelector('#app'));