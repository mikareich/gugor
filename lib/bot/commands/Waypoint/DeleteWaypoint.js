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

var _Subcommand2 = _interopRequireDefault(require("../../utils/Subcommand"));

var _route = _interopRequireDefault(require("../../../api/utils/route"));

var _logCLI = _interopRequireDefault(require("../../../utils/logCLI"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var DeleteWaypoint = /*#__PURE__*/function (_Subcommand) {
  (0, _inherits2.default)(DeleteWaypoint, _Subcommand);

  var _super = _createSuper(DeleteWaypoint);

  function DeleteWaypoint() {
    (0, _classCallCheck2.default)(this, DeleteWaypoint);
    var options = [{
      name: "name",
      description: "Name of the waypoint.",
      type: "STRING",
      required: true
    }];
    return _super.call(this, "delete", "Deletes a waypoint.", options);
  }

  (0, _createClass2.default)(DeleteWaypoint, [{
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
                return _axios.default.get((0, _route.default)("/waypoint"), {
                  data: {
                    name
                  },
                  headers: {
                    Authorization: "***"
                  }
                }).then(function (res) {
                  return res.data[0];
                });

              case 6:
                waypoint = _context.sent;

                if (waypoint) {
                  _context.next = 10;
                  break;
                }

                interaction.editReply("Waypoint not found");
                return _context.abrupt("return");

              case 10:
                _context.next = 12;
                return _axios.default.delete((0, _route.default)(`/waypoint`), {
                  data: {
                    // eslint-disable-next-line no-underscore-dangle
                    id: waypoint._id
                  },
                  headers: {
                    Authorization: "***"
                  }
                });

              case 12:
                interaction.editReply(`Waypoint ${name} deleted.`);
                _context.next = 19;
                break;

              case 15:
                _context.prev = 15;
                _context.t0 = _context["catch"](3);
                (0, _logCLI.default)(_context.t0, "error");

                if (_context.t0 instanceof Error) {
                  _ErrorHandler.default.withCode(3, interaction, _context.t0.message);
                }

              case 19:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[3, 15]]);
      }));

      function execute(_x) {
        return _execute.apply(this, arguments);
      }

      return execute;
    }()
  }]);
  return DeleteWaypoint;
}(_Subcommand2.default);

var _default = DeleteWaypoint;
exports.default = _default;