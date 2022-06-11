import { Message } from "discord.js";
import { getDynamicArguments, matchingSyntax } from "../utils/processCommand";

class Module {
  constructor(commandName, commandMap) {
    this.commandName = commandName;
    this.commandMap = commandMap;
  }

  /**
   * Processes a message
   * @param {Message} message
   */
  processMessage(commandString, message) {
    console.log(this.commandMap);
    this.commandMap.forEach((command) => {
      if (matchingSyntax(commandString, command.syntax)) {
        command.execute(
          commandString,
          getDynamicArguments(commandString, command.syntax),
          message
        );
      }
    });
  }
}

export default Module;
