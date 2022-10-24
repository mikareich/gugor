"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _toApplicationCommandObject = _interopRequireDefault(require("./toApplicationCommandObject"));

var Subcommand = /*#__PURE__*/function () {
  /**
   * Creates a new command.
   * @param name Name of the command
   * @param description Description of the command
   * @param options Options
   */
  function Subcommand(name, description, options) {
    (0, _classCallCheck2.default)(this, Subcommand);
    (0, _defineProperty2.default)(this, "options", []);
    this.name = name;
    this.description = description;
    if (options) this.options = options;
  }

  (0, _createClass2.default)(Subcommand, [{
    key: "execute",
    value: function execute(_interaction) {
      throw new Error("Method not implemented.");
    }
  }, {
    key: "toACO",
    value: function toACO() {
      return (0, _toApplicationCommandObject.default)(this);
    }
  }]);
  return Subcommand;
}();

var _default = Subcommand;
exports.default = _default;