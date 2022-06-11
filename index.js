import "dotenv/config";
import { Client, Intents } from "discord.js";
import processMessage from "./utils/processMessage";
import Waypoint from "./modules/Waypoint";
import Julia from "./modules/Julia";
import { getDynamicArguments, formatSyntax } from "./utils/processCommand";

// Instantiate a new client with some necessary parameters.
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

// Notify progress
const commandModules = [new Waypoint(), new Julia()];
client.on("ready", function (e) {
  console.log("Ready!");
});

client.on("message", (message) => processMessage(message, commandModules));

// Authenticate
client.login(process.env.DISCORD_TOKEN);
