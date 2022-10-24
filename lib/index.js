"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _Waypoint = _interopRequireDefault(require("./bot/commands/Waypoint"));

var _Gugor = _interopRequireDefault(require("./bot/commands/Gugor"));

var _server = _interopRequireDefault(require("./api/server"));

var _logCLI = _interopRequireDefault(require("./utils/logCLI"));

var _bot = _interopRequireDefault(require("./bot/bot"));

var commands = [new _Waypoint.default(), new _Gugor.default()]; // setup modules

Promise.all([(0, _bot.default)(commands), (0, _server.default)()]).then(function () {
  (0, _logCLI.default)("All modules loaded. Ready to start :yay:", "success", "index");
});