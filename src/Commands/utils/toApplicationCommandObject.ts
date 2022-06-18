import Command from "./Command"
import { ALL_OPTION_TYPES } from "./CommandOption"
import Subcommand from "./Subcommand"

export interface ApplicationCommandObject {
  name: string
  description: string
  options?: ApplicationCommandObject[]
  type?: number
  required?: boolean
}

/** Parses (sub)command to JSON Object */
function toAppilcationCommandObject(
  command: Command | Subcommand
): ApplicationCommandObject {
  const options: ApplicationCommandObject[] = []

  // add subcommands
  if (command instanceof Command) {
    command.subcommands.forEach((subcommand) => {
      const option = subcommand.toACO()
      option.type = 1

      options.push(option)
    })
  }

  // add options
  command.options.forEach(({ name, description, type, required }) => {
    const option: ApplicationCommandObject = {
      name,
      description,
      required: required || false,
      type: ALL_OPTION_TYPES.indexOf(type) + 1,
    }

    options.push(option)
  })

  return {
    name: command.name,
    description: command.description,
    options,
  }
}

export default toAppilcationCommandObject
