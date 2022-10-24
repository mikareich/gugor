"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _mongoose = require("mongoose");

var _envVariables = _interopRequireDefault(require("../../utils/envVariables"));

var _logCLI = _interopRequireDefault(require("../../utils/logCLI"));

/** Connects with the gugor database */
function connectDB() {
  return _connectDB.apply(this, arguments);
}

function _connectDB() {
  _connectDB = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return (0, _mongoose.connect)(_envVariables.default.MONGO_URI);

          case 3:
            (0, _logCLI.default)("Connected to database", "success", "/api/utils/connectDB.ts");
            _context.next = 9;
            break;

          case 6:
            _context.prev = 6;
            _context.t0 = _context["catch"](0);
            (0, _logCLI.default)(_context.t0, "error", "/api/utils/connectDB.ts");

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 6]]);
  }));
  return _connectDB.apply(this, arguments);
}

var _default = connectDB;
exports.default = _default;