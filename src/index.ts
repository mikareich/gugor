import "dotenv/config"
import { Client, Intents } from "discord.js"
import handleMessage from "./Discord/handleMessage"
import Waypoint from "./CommandModules/Waypoint"
import Julia from "./CommandModules/Julia"

// Instantiate a new client with some necessary parameters.
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
})

// Notify progress
client.on("ready", () => {
  console.log("Ready!")
})

const commandModules = [new Waypoint(), new Julia()]
client.on("message", (message) => handleMessage(message, commandModules))

// Authenticate
client.login(process.env.DISCORD_TOKEN)
