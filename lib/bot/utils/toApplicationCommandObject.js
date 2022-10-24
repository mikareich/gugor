"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Command = _interopRequireDefault(require("./Command"));

var _allCommandOptionTypes = _interopRequireDefault(require("./allCommandOptionTypes"));

/** Parses (sub)command to JSON Object
 * @param command Command to parse
 * @returns JSON Object
 */
function toAppilcationCommandObject(command) {
  var options = []; // add subcommands

  if (command instanceof _Command.default) {
    command.subcommands.forEach(function (subcommand) {
      var option = subcommand.toACO();
      option.type = 1;
      options.push(option);
    });
  } // add options


  command.options.forEach(function (_ref) {
    var name = _ref.name,
        description = _ref.description,
        type = _ref.type,
        required = _ref.required,
        choices = _ref.choices;
    var option = {
      name,
      description,
      required: required || false,
      type: _allCommandOptionTypes.default.indexOf(type) + 1
    }; // adds choices to option if option is of type "STRING" or "INTEGER"

    if (choices && (type === "STRING" || type === "INTEGER")) {
      option.choices = choices;
    }

    options.push(option);
  });
  return {
    name: command.name,
    description: command.description,
    options
  };
}

var _default = toAppilcationCommandObject;
exports.default = _default;