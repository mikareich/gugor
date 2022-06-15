import ErrorHandler from "../ErrorHandling/ErrorHandler"
import {
  DynamicArguments,
  getDynamicArguments,
  matchingSyntax,
} from "../utils/processCommand"

/* A representation of a command */
export interface Command {
  syntax: string
  description: string
  execute: (
    /** All dynamic arguments */
    // eslint-disable-next-line no-unused-vars
    dynamicArguments: DynamicArguments
  ) => void
}

/** A collection of commands */
export type CommandMap = Command[]

/**
 * Executes certain features on command of the user
 */
class CommandModule {
  /** Name of the module */
  public readonly moduleName: string

  /** All commands dedicated to this module */
  public readonly commandMap: CommandMap

  /**
   * Creates a new command module
   * @param moduleName Name of the module
   * @param commandMap All commands dedicated to this module
   */
  constructor(moduleName: string, commandMap: CommandMap) {
    this.commandMap = commandMap
    this.moduleName = moduleName
  }

  /**
   * Processes a message
   * @param {Message} message
   */
  public processCommand(absoluteCommand: string) {
    const command = this.commandMap.find(({ syntax }) =>
      matchingSyntax(absoluteCommand, syntax)
    )

    if (!command) {
      ErrorHandler.withCode(1, true)
      return
    }

    const dynamicArguments = getDynamicArguments(
      absoluteCommand,
      command.syntax
    )
    command.execute(dynamicArguments)
  }
}

export default CommandModule
