"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.loginClient = loginClient;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _discord = require("discord.js");

var _logCLI = _interopRequireDefault(require("../../utils/logCLI"));

var _envVariables = _interopRequireDefault(require("../../utils/envVariables"));

/** Client object for the discord bot */
var botClient = new _discord.Client({
  intents: [_discord.Intents.FLAGS.GUILDS, _discord.Intents.FLAGS.GUILD_MESSAGES]
});
/**
 * Connects client to discord services.
 */

function loginClient() {
  return _loginClient.apply(this, arguments);
}

function _loginClient() {
  _loginClient = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return botClient.login(_envVariables.default.DC_TOKEN);

          case 3:
            (0, _logCLI.default)("Logged in to discord", "success", "/bot/utils/client.ts");
            _context.next = 9;
            break;

          case 6:
            _context.prev = 6;
            _context.t0 = _context["catch"](0);
            (0, _logCLI.default)(_context.t0, "error", "/bot/utils/client.ts");

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 6]]);
  }));
  return _loginClient.apply(this, arguments);
}

var _default = botClient;
exports.default = _default;