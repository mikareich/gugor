"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var statusEmojis = {
  success: "✅",
  error: "❌",
  warning: "⚠️",
  info: "ℹ️"
};

function logCLI(message, status, module) {
  var emoji = statusEmojis[status || "info"];
  var prefix = module ? `[${emoji} in \x1b[33m${module}\x1b[0m]` : `[${emoji}]`;
  console.log(`${prefix} ${message}`);
}

var _default = logCLI;
exports.default = _default;