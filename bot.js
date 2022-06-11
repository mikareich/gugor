// Setup our environment variables via dotenv
require("dotenv").config();
// Import relevant classes from discord.js
import { Client, Intents } from "discord.js";
// Instantiate a new client with some necessary parameters.
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});
// Notify progress
client.on("ready", (e) => {
  console.log(`Logged in as ${client.user.tag}!`);
});
// Authenticate
client.login(process.env.DISCORD_TOKEN);

client.on("message", (msg) => {
  const msgParts = msg.content.split(" ");
});