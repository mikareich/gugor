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
    var options = [{
      name: "name",
      description: "Name of the waypoint.",
      type: "STRING",
      required: true
    }];
    return _super.call(this, "get", "Returns coordinates of a waypoint", options);
  }

  (0, _createClass2.default)(GetWaypoint, [{
    key: "execute",
    value: function () {
      var _execute = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(interaction) {
        var name, waypoint;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return interaction.deferReply();

              case 2:
                name = interaction.options.getString("name");
                _context.prev = 3;
                _context.next = 6;
                return _axios.default.get((0, _route.default)(`/waypoint`), {
                  data: {
                    name
                  },
                  headers: {
                    Authorization: "***"
                  }
                }).then(function (res) {
                  return res.data[0];
                }).then(_convertWaypointObject.default);

              case 6:
                waypoint = _context.sent;
                _context.next = 9;
                return interaction.editReply(waypoint || "No waypoint found.");

              case 9:
                _context.next = 14;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](3);

                if (_context.t0 instanceof Error) {
                  _ErrorHandler.default.withCode(3, interaction, _context.t0.message);
                }

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[3, 11]]);
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