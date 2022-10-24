"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _bot = _interopRequireDefault(require("./bot"));

var _Gugor = _interopRequireDefault(require("./commands/Gugor"));

var _Waypoint = _interopRequireDefault(require("./commands/Waypoint"));

var commands = [new _Waypoint.default(), new _Gugor.default()];
(0, _bot.default)(commands);