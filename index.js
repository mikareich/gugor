import "dotenv/config";
import { Client, Intents } from "discord.js";
import processMessage from "./utils/processMessage";

// Instantiate a new client with some necessary parameters.
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

// Notify progress
client.on("ready", function (e) {
  console.log("Ready!");
});

client.on("message", processMessage);

// Authenticate
client.login(process.env.DISCORD_TOKEN);
