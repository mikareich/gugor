"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _ErrorHandler = _interopRequireDefault(require("../errorHandler/ErrorHandler"));

var _logCLI = _interopRequireDefault(require("../../utils/logCLI"));

/**
 * Assigns commands to interactions and executes them.
 * @param interaction Interaction Object
 * @param commands Array of Command Objects
 */
function handleInteraction(_x, _x2) {
  return _handleInteraction.apply(this, arguments);
}

function _handleInteraction() {
  _handleInteraction = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(interaction, commands) {
    var commandName, command, subcommand;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (interaction.isCommand()) {
              _context.next = 2;
              break;
            }

            return _context.abrupt("return");

          case 2:
            commandName = interaction.commandName; // Find command

            command = commands.find(function (c) {
              return c.name === commandName;
            });
            subcommand = command.subcommands.find(function (c) {
              return c.name === interaction.options.getSubcommand();
            }); // execute command

            _context.prev = 5;

            if (!subcommand) {
              _context.next = 11;
              break;
            }

            _context.next = 9;
            return subcommand.execute(interaction);

          case 9:
            _context.next = 14;
            break;

          case 11:
            if (!command.execute) {
              _context.next = 14;
              break;
            }

            _context.next = 14;
            return command.execute(interaction);

          case 14:
            _context.next = 21;
            break;

          case 16:
            _context.prev = 16;
            _context.t0 = _context["catch"](5);
            (0, _logCLI.default)(_context.t0, "error");
            _context.next = 21;
            return _ErrorHandler.default.withCode(3, interaction, _context.t0);

          case 21:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[5, 16]]);
  }));
  return _handleInteraction.apply(this, arguments);
}

var _default = handleInteraction;
exports.default = _default;