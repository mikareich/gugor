"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("dotenv/config");

var _logCLI = _interopRequireDefault(require("./logCLI"));

var _process$env = process.env,
    NODE_ENV = _process$env.NODE_ENV,
    PORT = _process$env.PORT,
    DEV_API_URI = _process$env.DEV_API_URI,
    PROD_API_URI = _process$env.PROD_API_URI,
    DC_TOKEN = _process$env.DC_TOKEN,
    DC_CLIENT_ID = _process$env.DC_CLIENT_ID,
    DC_FLUFFY_TUFFYS_GUILD_ID = _process$env.DC_FLUFFY_TUFFYS_GUILD_ID,
    MONGO_URI = _process$env.MONGO_URI; // check if all env variables are set

if (DEV_API_URI && PROD_API_URI && DC_TOKEN && DC_CLIENT_ID && DC_FLUFFY_TUFFYS_GUILD_ID && MONGO_URI) {
  (0, _logCLI.default)("All env variables are set", "success", "envVariables.ts");
} else {
  (0, _logCLI.default)("Missing environment variables", "error", "envVariables.ts");
  process.exit(1);
}

var _default = {
  /** Node environment */
  NODE_ENV,

  /** Port to listen on */
  PORT,

  /** Development API URI */
  DEV_API_URI,

  /** Production API URI */
  PROD_API_URI,

  /** Discord client token */
  DC_TOKEN,

  /** Discord client ID */
  DC_CLIENT_ID,

  /** Discord fluffy tuffys server ID */
  DC_FLUFFY_TUFFYS_GUILD_ID,

  /** Mongo db uri */
  MONGO_URI
};
exports.default = _default;