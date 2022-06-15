import { Message } from "discord.js"
import CommandModule from "../CommandModules/CommandModule"
import ErrorHandler from "../ErrorHandling/ErrorHandler"
import botOptions from "../utils/botOptions"

/**
 * Processes a message by dedicated module
 * @param  message Message to process
 */
function handleMessage(message: Message, modules: CommandModule[]) {
  if (!message.content.startsWith(botOptions.commandPrefix)) return
  if (message.author.bot) return

  // split the message into command and arguments
  const [, moduleName, ...command] = message.content.split(" ")

  // call module and pass the message and the command
  const absoluteCommandString = command.join(" ")
  const module = modules.find((m) => m.moduleName === moduleName?.toLowerCase())

  if (!module) {
    ErrorHandler.withCode(2, true)
    return
  }

  module.processCommand(absoluteCommandString)
}

export default handleMessage
