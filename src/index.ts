import "dotenv/config"
import { Waypoint } from "./Commands"
import client from "./Discord/client"
import handleInteraction from "./Discord/handleInteraction"
import registerCommands from "./utils/registerCommands"

const commands = [new Waypoint()]

registerCommands(commands)

client.on("ready", () => {
  console.log("Ready!")
})

client.on("interactionCreate", async (interaction) =>
  handleInteraction(interaction, commands)
)

const { DISCORD_TOKEN } = process.env
client.login(DISCORD_TOKEN!)
