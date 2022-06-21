import { Client, Intents } from "discord.js"
import logCLI from "../../utils/logMessage"
import envVars from "../../utils/envVariables"

/** Client object for the discord bot */
const botClient = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
})

/**
 * Connects client to discord services.
 */
export async function loginClient() {
  try {
    await botClient.login(envVars.DC_TOKEN)
    logCLI("Logged in to discord", "success")
  } catch (error) {
    logCLI(error, "error")
  }
}

export default botClient
