"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _waypoint = require("./waypoint.controllers");

var router = (0, _express.Router)();
router.get("/", _waypoint.getWaypoint);
router.post("/", _waypoint.createWaypoint);
router.delete("/", _waypoint.deleteWaypoint);
var _default = router;
exports.default = _default;