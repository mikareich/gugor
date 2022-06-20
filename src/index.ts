import "dotenv/config"
import { Waypoint } from "./bot/commands"
import botClient, { loginClient } from "./bot/utils/client"
import handleInteraction from "./bot/eventHandler/handleInteraction"
import connectDB from "./database/utils/connectDB"
import registerCommands from "./bot/utils/registerCommands"

const commands = [new Waypoint()]

// setup modules
connectDB()
registerCommands(commands)
loginClient()

// setup event handlers
botClient.on("ready", () => {
  console.log("Ready!")
})

botClient.on("interactionCreate", async (interaction) =>
  handleInteraction(interaction, commands)
)
