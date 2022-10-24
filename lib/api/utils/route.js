"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _envVariables = _interopRequireDefault(require("../../utils/envVariables"));

var API_URI = _envVariables.default.NODE_ENV === "production" ? _envVariables.default.PROD_API_URI : _envVariables.default.DEV_API_URI;
/**
 * Formats api uri for a route.
 * @param apiRoute - The route to the API.
 * @returns Absolute URI to the API.
 */

function route(apiRoute) {
  return `${API_URI}${apiRoute}`;
}

var _default = route;
exports.default = _default;