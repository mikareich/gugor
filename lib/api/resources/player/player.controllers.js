"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createPlayer = createPlayer;
exports.deletePlayer = deletePlayer;
exports.getPlayer = getPlayer;
exports.updatePlayer = updatePlayer;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _player = _interopRequireDefault(require("./player.model"));

function createPlayer(_x, _x2) {
  return _createPlayer.apply(this, arguments);
}

function _createPlayer() {
  _createPlayer = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(req, res) {
    var playerData, player;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            playerData = req.body;
            _context.next = 4;
            return _player.default.create(playerData);

          case 4:
            player = _context.sent;
            res.status(201).json(player);
            _context.next = 12;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            console.error(_context.t0);

            if (_context.t0 instanceof Error) {
              res.status(400).json({
                error: _context.t0.message
              });
            }

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 8]]);
  }));
  return _createPlayer.apply(this, arguments);
}

function getPlayer(_x3, _x4) {
  return _getPlayer.apply(this, arguments);
}

function _getPlayer() {
  _getPlayer = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(req, res) {
    var query, players;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            query = req.body;
            _context2.next = 4;
            return _player.default.find(query);

          case 4:
            players = _context2.sent;
            res.status(200).json(players);
            _context2.next = 12;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](0);
            console.error(_context2.t0);

            if (_context2.t0 instanceof Error) {
              res.status(400).json({
                error: _context2.t0.message
              });
            }

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 8]]);
  }));
  return _getPlayer.apply(this, arguments);
}

function updatePlayer(_x5, _x6) {
  return _updatePlayer.apply(this, arguments);
}

function _updatePlayer() {
  _updatePlayer = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(req, res) {
    var _req$body, id, update, player;

    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _req$body = req.body, id = _req$body.id, update = _req$body.update;
            _context3.next = 4;
            return _player.default.findByIdAndUpdate(id, update, {
              returnOriginal: false
            });

          case 4:
            player = _context3.sent;
            res.status(200).json(player);
            _context3.next = 12;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](0);
            console.error(_context3.t0);

            if (_context3.t0 instanceof Error) {
              res.status(400).json({
                error: _context3.t0.message
              });
            }

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 8]]);
  }));
  return _updatePlayer.apply(this, arguments);
}

function deletePlayer(_x7, _x8) {
  return _deletePlayer.apply(this, arguments);
}

function _deletePlayer() {
  _deletePlayer = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(req, res) {
    var id, player;
    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            id = req.body.id;
            _context4.next = 4;
            return _player.default.findByIdAndDelete(id);

          case 4:
            player = _context4.sent;

            if (player) {
              _context4.next = 7;
              break;
            }

            throw new Error(`Player with id ${id} not found.`);

          case 7:
            res.status(200).json(`Player with id ${id} deleted`);
            _context4.next = 14;
            break;

          case 10:
            _context4.prev = 10;
            _context4.t0 = _context4["catch"](0);
            console.error(_context4.t0);

            if (_context4.t0 instanceof Error) {
              res.status(400).json({
                error: _context4.t0.message
              });
            }

          case 14:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 10]]);
  }));
  return _deletePlayer.apply(this, arguments);
}