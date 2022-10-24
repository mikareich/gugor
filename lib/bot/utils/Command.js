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

var Command = /*#__PURE__*/function () {
  /**
   * Creates a new command.
   * @param name Name of the command
   * @param description Description of the command
   * @param subcommands Subcommands
   * @param options Options
   */
  function Command(name, description, subcommands, options) {
    (0, _classCallCheck2.default)(this, Command);
    (0, _defineProperty2.default)(this, "subcommands", []);
    (0, _defineProperty2.default)(this, "options", []);
    this.name = name;
    this.description = description;
    if (subcommands) this.subcommands = subcommands;
    if (options) this.options = options;
  }

  (0, _createClass2.default)(Command, [{
    key: "execute",
    value: function execute(_interaction) {}
  }, {
    key: "toACO",
    value: function toACO() {
      return (0, _toApplicationCommandObject.default)(this);
    }
  }]);
  return Command;
}();

var _default = Command;
exports.default = _default;