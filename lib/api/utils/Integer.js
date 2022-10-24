"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var Integer = {
  type: Number,
  validate: {
    validator: Number.isInteger,
    message: "{VALUE} is not an integer value"
  }
};
var _default = Integer;
exports.default = _default;