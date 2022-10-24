import Waypoint from "./bot/commands/Waypoint"
import Gugor from "./bot/commands/Gugor"
import startServer from "./api/server"
import logCLI from "./utils/logCLI"
import startBot from "./bot/bot"

const commands = [new Waypoint(), new Gugor()]

// setup modules
Promise.all([startBot(commands), startServer()]).then(() => {
  logCLI("All modules loaded. Ready to start :yay:", "success", "index")
})
