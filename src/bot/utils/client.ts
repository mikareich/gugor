import { Client, Intents } from "discord.js"

/** Client object for the discord bot */
const botClient = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
})

/**
 * Connects client to discord services.
 */
export async function loginClient() {
  await botClient.login(process.env.DC_TOKEN!)
}

export default botClient
