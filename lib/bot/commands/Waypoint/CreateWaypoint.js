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

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var CreateWaypoint = /*#__PURE__*/function (_Subcommand) {
  (0, _inherits2.default)(CreateWaypoint, _Subcommand);

  var _super = _createSuper(CreateWaypoint);

  function CreateWaypoint() {
    (0, _classCallCheck2.default)(this, CreateWaypoint);
    var options = [{
      name: "name",
      description: "Name of the waypoint.",
      type: "STRING",
      required: true
    }, {
      name: "x",
      description: "X coordinate of the waypoint.",
      type: "INTEGER",
      required: true
    }, {
      name: "y",
      description: "Y coordinate of the waypoint.",
      type: "INTEGER",
      required: true
    }, {
      name: "z",
      description: "Z coordinate of the waypoint.",
      type: "INTEGER",
      required: true
    }, {
      name: "dimension",
      description: "Dimension of the waypoint.",
      type: "STRING",
      choices: [{
        name: "Overworld",
        value: "overworld"
      }, {
        name: "Nether",
        value: "nether"
      }, {
        name: "End",
        value: "end"
      }]
    }];
    return _super.call(this, "create", "Creates a waypoint.", options);
  }

  (0, _createClass2.default)(CreateWaypoint, [{
    key: "execute",
    value: function () {
      var _execute = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(interaction) {
        var name, x, y, z, dimension, waypoint, error;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return interaction.deferReply();

              case 2:
                name = interaction.options.getString("name");
                x = Number(interaction.options.getInteger("x"));
                y = Number(interaction.options.getInteger("y"));
                z = Number(interaction.options.getInteger("z"));
                dimension = interaction.options.getString("dimension") || "overworld";
                waypoint = {
                  name,
                  dimension,
                  coordinates: {
                    x,
                    y,
                    z
                  }
                };
                _context.prev = 8;
                _context.next = 11;
                return _axios.default.post((0, _route.default)("/waypoint"), waypoint);

              case 11:
                interaction.editReply(`Waypoint ${name} created.`);
                _context.next = 24;
                break;

              case 14:
                _context.prev = 14;
                _context.t0 = _context["catch"](8);
                error = _context.t0;

                if (!_axios.default.isAxiosError(error)) {
                  _context.next = 22;
                  break;
                }

                _context.next = 20;
                return _ErrorHandler.default.withCode(3, interaction, error.response.data.error);

              case 20:
                _context.next = 24;
                break;

              case 22:
                _context.next = 24;
                return _ErrorHandler.default.withCode(3, interaction, error.message);

              case 24:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[8, 14]]);
      }));

      function execute(_x) {
        return _execute.apply(this, arguments);
      }

      return execute;
    }()
  }]);
  return CreateWaypoint;
}(_Subcommand2.default);

var _default = CreateWaypoint;
exports.default = _default;