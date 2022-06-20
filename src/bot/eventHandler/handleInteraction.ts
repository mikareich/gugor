import { Interaction } from "discord.js"
import Command from "../commands/utils/Command"
import ErrorHandler from "../errorHandler/ErrorHandler"

/**
 * Assigns commands to interactions and executes them.
 * @param interaction Interaction Object
 * @param commands Array of Command Objects
 */
async function handleInteraction(
  interaction: Interaction,
  commands: Command[]
) {
  if (!interaction.isCommand()) return

  const { commandName } = interaction

  // Find command
  const command = commands.find((c) => c.name === commandName)!

  const subcommand = command.subcommands.find(
    (c) => c.name === interaction.options.getSubcommand()
  )

  // execute command
  try {
    if (subcommand) {
      await subcommand.execute(interaction)
    } else if (command.execute) {
      await command.execute(interaction)
    }
  } catch (error) {
    ErrorHandler.custom(error as string, interaction)
  }
}

export default handleInteraction
