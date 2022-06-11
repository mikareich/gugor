import botOptions from "./botOptions";

import { Message } from "discord.js";
/**
 * Processes a message by dedicated module
 * @param {Message} message Message to process
 */
function processMessage(message) {
  if (!message.content.startsWith(botOptions.commandPrefix)) return;
  if (message.author.bot) return;

  // yeah idk
  message.channel.send("hey");

  const waypoint = new Waypoint()

}

export default processMessage;
