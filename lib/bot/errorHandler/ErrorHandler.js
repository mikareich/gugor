"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _logCLI = _interopRequireDefault(require("../../utils/logCLI"));

var ErrorHandler = /*#__PURE__*/function () {
  function ErrorHandler() {
    (0, _classCallCheck2.default)(this, ErrorHandler);
  }

  (0, _createClass2.default)(ErrorHandler, null, [{
    key: "withCode",
    value:
    /**
     * Replies with an error message.
     * @param code Code of the error
     * @param interaction Interaction Object
     * @returns Error Object
     */
    function () {
      var _withCode = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(code, interaction, details) {
        var error, errorMessage;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                error = ErrorHandler.Errors.find(function (e) {
                  return e.code === code;
                });

                if (error) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return", ErrorHandler.withCode(1, interaction, details));

              case 3:
                errorMessage = `⚠️ ${error.message} ⚠️ \n**Details:** \`${details}\``;

                if (!(interaction.replied || interaction.deferred)) {
                  _context.next = 9;
                  break;
                }

                _context.next = 7;
                return interaction.editReply(errorMessage);

              case 7:
                _context.next = 11;
                break;

              case 9:
                _context.next = 11;
                return interaction.reply(errorMessage);

              case 11:
                (0, _logCLI.default)(errorMessage, "warning", "/bot/errorHandler/ErrorHandler.ts");
                return _context.abrupt("return", error);

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function withCode(_x, _x2, _x3) {
        return _withCode.apply(this, arguments);
      }

      return withCode;
    }()
  }]);
  return ErrorHandler;
}();

(0, _defineProperty2.default)(ErrorHandler, "Errors", [{
  message: "Error not found",
  code: 1
}, {
  message: "Command not found",
  code: 2
}, {
  message: "Oh snap! An unknown error occurred.",
  code: 3
}]);
var _default = ErrorHandler;
exports.default = _default;