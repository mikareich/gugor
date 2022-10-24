"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

var _Integer = _interopRequireDefault(require("../../utils/Integer"));

var WaypointSchema = new _mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  dimension: {
    type: String,
    required: true,
    enum: ["overworld", "nether", "end"]
  },
  coordinates: {
    type: {
      x: _Integer.default,
      y: _Integer.default,
      z: _Integer.default
    },
    required: true
  }
}, {
  collection: "waypoints",
  timestamps: true
});

var _default = (0, _mongoose.model)("Waypoint", WaypointSchema);

exports.default = _default;