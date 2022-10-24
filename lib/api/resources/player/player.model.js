"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

var _Integer = _interopRequireDefault(require("../../utils/Integer"));

var PlayerSchema = new _mongoose.Schema({
  discordID: {
    type: String,
    required: true,
    unique: true
  },
  minecraftUUID: {
    type: String,
    required: true,
    unique: true
  },
  role: {
    type: String,
    required: true,
    enum: ["admin", "operator", "default"]
  },
  password: {
    type: String,
    required: true
  },
  stats: {
    type: {
      numberOfDeaths: _Integer.default,
      level: _Integer.default,
      position: {
        dimension: {
          type: String,
          enum: ["overworld", "nether", "end"]
        },
        coordinates: {
          type: {
            x: _Integer.default,
            y: _Integer.default,
            z: _Integer.default
          }
        }
      }
    }
  }
});

var _default = (0, _mongoose.model)("Player", PlayerSchema);

exports.default = _default;