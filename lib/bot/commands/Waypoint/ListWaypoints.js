"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _axios = _interopRequireDefault(require("axios"));

var _ErrorHandler = _interopRequireDefault(require("../../errorHandler/ErrorHandler"));

var _convertWaypointObject = _interopRequireDefault(require("../../utils/convertWaypointObject"));

var _Subcommand2 = _interopRequireDefault(require("../../utils/Subcommand"));

var _route = _interopRequireDefault(require("../../../api/utils/route"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var GetWaypoint = /*#__PURE__*/function (_Subcommand) {
  (0, _inherits2.default)(GetWaypoint, _Subcommand);

  var _super = _createSuper(GetWaypoint);

  function GetWaypoint() {
    (0, _classCallCheck2.default)(this, GetWaypoint);
    return _super.call(this, "getall", "Returns all waypoints.");
  }

  (0, _createClass2.default)(GetWaypoint, [{
    key: "execute",
    value: function () {
      var _execute = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(interaction) {
        var waypointList;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return interaction.deferReply();

              case 2:
                _context.prev = 2;
                _context.next = 5;
                return _axios.default.get((0, _route.default)("/waypoint")).then(function (res) {
                  return res.data;
                }).then(function (waypoints) {
                  return waypoints.map(_convertWaypointObject.default);
                });

              case 5:
                waypointList = _context.sent;
                interaction.editReply(`${waypointList.join("\n\n") || "No waypoints found."}`);
                _context.next = 13;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](2);
                console.error(_context.t0);

                if (_context.t0 instanceof Error) {
                  _ErrorHandler.default.withCode(3, interaction, _context.t0.message);
                }

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 9]]);
      }));

      function execute(_x) {
        return _execute.apply(this, arguments);
      }

      return execute;
    }()
  }]);
  return GetWaypoint;
}(_Subcommand2.default);

var _default = GetWaypoint;
exports.default = _default;