import { Waypoint } from "./bot/commands"
import botClient from "./bot/utils/client"
import handleInteraction from "./bot/eventHandler/handleInteraction"
import startServer from "./api/server"
import logCLI from "./utils/logCLI"
import startBot from "./bot/bot"

const commands = [new Waypoint()]

// setup modules
Promise.all([startBot(commands), startServer()]).then(() => {
  logCLI("All modules loaded.", "success")

  botClient.on("interactionCreate", async (interaction) =>
    handleInteraction(interaction, commands)
  )
})
