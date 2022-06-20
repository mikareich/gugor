import "dotenv/config"
import { Waypoint } from "./bot/commands"
import client from "./bot/discord/client"
import handleInteraction from "./bot/discord/handleInteraction"
import connectDB from "./database/utils/connectDB"
import registerCommands from "./bot/utils/registerCommands"

const commands = [new Waypoint()]
registerCommands(commands)
connectDB()

client.on("ready", () => {
  console.log("Ready!")
})

client.on("interactionCreate", async (interaction) =>
  handleInteraction(interaction, commands)
)

const { DC_TOKEN } = process.env
client.login(DC_TOKEN!)
