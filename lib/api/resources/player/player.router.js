"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _player = require("./player.controllers");

var router = (0, _express.Router)();
router.get("/", _player.getPlayer);
router.post("/", _player.createPlayer);
router.put("/", _player.updatePlayer);
router.delete("/", _player.deletePlayer);
var _default = router;
exports.default = _default;