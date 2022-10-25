import startServer from "./api/server"
import logCLI from "./utils/logCLI"
import startBot from "./bot/bot"
import envVariables from "./utils/envVariables"
import route from "./api/utils/route"
import commands from "./bot/commands"

// setup modules
Promise.all([startBot(commands), startServer()]).then(() => {
  logCLI("All modules loaded. Ready to start :yay:", "success", "/index.ts")
  // log env variables to console for debugging purposes
  const formattedVariables = Object.entries(envVariables)
    .map(([key, value]) => `\n\x1b[1m${key}\x1b[0m: \x1b[32m${value}\x1b[0m`)
    .join("")

  logCLI(`env variables: ${formattedVariables}`, "info", "/index.ts")
  logCLI(`Using ${route("")} as API URI`, "info", "/index.ts")
})
