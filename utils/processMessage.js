import botOptions from "./botOptions";

import { Message } from "discord.js";

/**
 * Processes a message by dedicated module
 * @param {Message} message Message to process
 */
function processMessage(message, modules) {
  if (!message.content.startsWith(botOptions.commandPrefix)) return;
  if (message.author.bot) return;

  // split the message into command and arguments
  const [prefix, moduleName, ...command] = message.content.split(" ");
  // call module and pass the message and the command
  const module = modules.find(
    (module) => module.commandName === moduleName?.toLowerCase()
  );

  if (module) module.processMessage(command.join(" "), message);
  else
    message.channel.send(
      "Hehe imagine man hat sich vertippt lol [Module not found]"
    );
}

export default processMessage;
