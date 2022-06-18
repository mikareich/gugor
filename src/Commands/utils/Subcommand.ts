import { CommandInteraction } from "discord.js"
import { CommandOption } from "./CommandOption"
import toAppilcationCommandObject, {
  ApplicationCommandObject,
} from "./toApplicationCommandObject"

export declare interface ISubcommand {
  /** Name of the command */
  readonly name: string

  /** Short description of what the command can do */
  readonly description: string

  /** Options */
  readonly options: CommandOption[]

  /** Function to execute when command is called */
  execute(_interaction: CommandInteraction): void | Promise<void>

  /** Formats command to Appilcation Command Object */
  toACO(): ApplicationCommandObject
}

class Subcommand implements ISubcommand {
  public name: string

  public description: string

  public options: CommandOption[] = []

  /**
   * Creates a new command.
   * @param name Name of the command
   * @param description Description of the command
   * @param options Options
   */
  constructor(name: string, description: string, options?: CommandOption[]) {
    this.name = name
    this.description = description
    if (options) this.options = options
  }

  execute(_interaction: CommandInteraction): void | Promise<void> {
    throw new Error("Method not implemented.")
  }

  toACO() {
    return toAppilcationCommandObject(this)
  }
}

export default Subcommand
