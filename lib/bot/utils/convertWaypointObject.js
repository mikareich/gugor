"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _builders = require("@discordjs/builders");

/**
 * Converts a waypoint to a string.
 * @param waypoint Waypoint to convert to string.
 * @returns Waypoint as string.
 */
function convertWaypointObject(waypoint) {
  return `${waypoint.name} (${waypoint.dimension}): ${(0, _builders.inlineCode)(`${waypoint.coordinates.x}, ${waypoint.coordinates.y}, ${waypoint.coordinates.z}`)}`;
}

var _default = convertWaypointObject;
exports.default = _default;