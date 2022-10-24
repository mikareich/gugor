"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createWaypoint = createWaypoint;
exports.deleteWaypoint = deleteWaypoint;
exports.getWaypoint = getWaypoint;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _logCLI = _interopRequireDefault(require("../../../utils/logCLI"));

var _waypoint = _interopRequireDefault(require("./waypoint.model"));

function createWaypoint(_x, _x2) {
  return _createWaypoint.apply(this, arguments);
}

function _createWaypoint() {
  _createWaypoint = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(req, res) {
    var waypointData, waypoint;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            waypointData = req.body;
            _context.next = 4;
            return _waypoint.default.create(waypointData);

          case 4:
            waypoint = _context.sent;
            res.status(201).json(waypoint);
            _context.next = 12;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            // @ts-ignore
            (0, _logCLI.default)(_context.t0, "error", "waypoint.controllers.ts"); // @ts-ignore

            res.status(400).json({
              error: _context.t0.message
            });

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 8]]);
  }));
  return _createWaypoint.apply(this, arguments);
}

function getWaypoint(_x3, _x4) {
  return _getWaypoint.apply(this, arguments);
}

function _getWaypoint() {
  _getWaypoint = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(req, res) {
    var query, waypoints;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            query = req.body;
            _context2.next = 4;
            return _waypoint.default.find(query);

          case 4:
            waypoints = _context2.sent;
            res.status(200).json(waypoints);
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
  return _getWaypoint.apply(this, arguments);
}

function deleteWaypoint(_x5, _x6) {
  return _deleteWaypoint.apply(this, arguments);
}

function _deleteWaypoint() {
  _deleteWaypoint = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(req, res) {
    var id, waypoint;
    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            id = req.body.id;
            _context3.next = 4;
            return _waypoint.default.findByIdAndDelete(id);

          case 4:
            waypoint = _context3.sent;

            if (waypoint) {
              _context3.next = 7;
              break;
            }

            throw new Error(`Waypoint with id ${id} not found.`);

          case 7:
            res.status(200).json({
              message: `Waypoint with id ${id} deleted.`
            });
            _context3.next = 14;
            break;

          case 10:
            _context3.prev = 10;
            _context3.t0 = _context3["catch"](0);
            console.error(_context3.t0);

            if (_context3.t0 instanceof Error) {
              res.status(400).json({
                error: _context3.t0.message
              });
            }

          case 14:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 10]]);
  }));
  return _deleteWaypoint.apply(this, arguments);
}