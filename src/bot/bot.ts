import { loginClient } from "./utils/client"
import Command from "./utils/Command"
import registerCommands from "./utils/registerCommands"
import logCLI from "../utils/logCLI"

async function startBot(commands: Command[]) {
  try {
    await loginClient()
    await registerCommands(commands)

    logCLI("Bot started", "success")
  } catch (error) {
    logCLI(error, "error")
  }
}

export default startBot
