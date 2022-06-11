import { Message } from "discord.js";

class Module {
  constructor(commandName) {
    this.commandName = commandName;
  }

  /**
   * Processes a message
   * @param {Message} message
   */
  processCommand(message) {
    throw new Error("processCommand() not implemented");
  }
}

export default Module;
