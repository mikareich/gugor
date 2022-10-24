"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _Command2 = _interopRequireDefault(require("../../utils/Command"));

var _CreateWaypoint = _interopRequireDefault(require("./CreateWaypoint"));

var _DeleteWaypoint = _interopRequireDefault(require("./DeleteWaypoint"));

var _GetWaypoint = _interopRequireDefault(require("./GetWaypoint"));

var _ListWaypoints = _interopRequireDefault(require("./ListWaypoints"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Waypoint = /*#__PURE__*/function (_Command) {
  (0, _inherits2.default)(Waypoint, _Command);

  var _super = _createSuper(Waypoint);

  function Waypoint() {
    (0, _classCallCheck2.default)(this, Waypoint);
    return _super.call(this, "waypoint", "Manages waypoints.", [new _CreateWaypoint.default(), new _GetWaypoint.default(), new _DeleteWaypoint.default(), new _ListWaypoints.default()]);
  }

  return (0, _createClass2.default)(Waypoint);
}(_Command2.default);

var _default = Waypoint;
exports.default = _default;