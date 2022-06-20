import "dotenv/config"
import { Waypoint } from "./commands"
import client from "./discord/client"
import handleInteraction from "./discord/handleInteraction"
import connectDB from "./utils/connectDB"
import registerCommands from "./utils/registerCommands"

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
