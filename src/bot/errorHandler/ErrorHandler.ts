import { CommandInteraction } from "discord.js"
import { Error } from "../../interfaces/index"

class ErrorHandler {
  public static Errors: Error[] = [
    {
      message: "Error not found",
      code: 1,
    },
    {
      message: "Command not found",
      code: 2,
    },
    {
      message: "Oh snap! An unknown error occurred.",
      code: 3,
    },
  ]

  /**
   * Replies with an error message.
   * @param code Code of the error
   * @param interaction Interaction Object
   * @returns Error Object
   */
  public static withCode(
    code: number,
    interaction: CommandInteraction
  ): Error | undefined {
    const error = ErrorHandler.Errors.find((e) => e.code === code)

    if (!error) return ErrorHandler.withCode(1, interaction)

    interaction?.reply(error.message)

    return error
  }

  /**
   * Replies with an error custom message.
   * @param message Message of the error
   * @param interaction Interaction Object
   * @param replied Whether the interaction has been replied to
   */
  public static async custom(
    message: string,
    interaction: CommandInteraction,
    replied = false
  ) {
    if (replied) {
      await interaction.editReply(message)
    } else {
      await interaction.reply(message)
    }
  }
}

export default ErrorHandler
