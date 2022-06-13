import { Message } from "discord.js"
import CommandModule from "../CommandModules/CommandModule"
import botOptions from "../utils/botOptions"

/**
 * Processes a message by dedicated module
 * @param  message Message to process
 */
function handleMessage(message: Message, modules: CommandModule[]) {
  if (!message.content.startsWith(botOptions.commandPrefix)) return
  if (message.author.bot) return

  console.log(message.content)

  // split the message into command and arguments
  const [, moduleName, ...command] = message.content.split(" ")
  const absoluteCommandString = command.join(" ")
  // call module and pass the message and the command
  const module = modules.find((m) => m.moduleName === moduleName?.toLowerCase())

  if (module) module.processCommand(absoluteCommandString)
  else
    message.channel.send(
      "Hehe imagine man hat sich vertippt lol [Module not found]"
    )
}

export default handleMessage
