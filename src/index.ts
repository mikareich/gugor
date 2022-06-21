import "dotenv/config"
import { Waypoint } from "./bot/commands"
import botClient, { loginClient } from "./bot/utils/client"
import handleInteraction from "./bot/eventHandler/handleInteraction"
import registerCommands from "./bot/utils/registerCommands"
import startServer from "./api/server"
import logCLI from "./utils/logMessage"

const commands = [new Waypoint()]

// setup modules
Promise.all([loginClient(), registerCommands(commands), startServer()]).then(
  () => {
    logCLI("All modules loaded.", "success")

    botClient.on("interactionCreate", async (interaction) =>
      handleInteraction(interaction, commands)
    )
  }
)
