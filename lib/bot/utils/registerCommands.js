"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _rest = require("@discordjs/rest");

var _v = require("discord-api-types/v9");

var _logCLI = _interopRequireDefault(require("../../utils/logCLI"));

var _envVariables = _interopRequireDefault(require("../../utils/envVariables"));

/**
 * Registers commands with the Discord REST API.
 * @param commands - An array of commands to register.
 */
function registerCommands(_x) {
  return _registerCommands.apply(this, arguments);
}

function _registerCommands() {
  _registerCommands = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(commands) {
    var rest;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            rest = new _rest.REST({
              version: "9"
            }).setToken(_envVariables.default.DC_TOKEN);
            _context.prev = 1;
            _context.next = 4;
            return rest.put(_v.Routes.applicationGuildCommands(_envVariables.default.DC_CLIENT_ID, _envVariables.default.DC_FLUFFY_TUFFYS_GUILD_ID), {
              body: commands.map(function (command) {
                return command.toACO();
              })
            });

          case 4:
            _context.next = 9;
            break;

          case 6:
            _context.prev = 6;
            _context.t0 = _context["catch"](1);
            (0, _logCLI.default)(_context.t0, "error");

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 6]]);
  }));
  return _registerCommands.apply(this, arguments);
}

var _default = registerCommands;
exports.default = _default;