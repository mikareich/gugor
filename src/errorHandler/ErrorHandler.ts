import { CommandInteraction } from "discord.js"

interface Error {
  name: string
  message: string
  code: number
}

class ErrorHandler {
  public static Errors: Error[] = [
    {
      name: "ErrorNotFound",
      message: "Error not found",
      code: 1,
    },
    {
      name: "CommandNotFound",
      message: "Command not found",
      code: 2,
    },
    {
      name: "UknownError",
      message: "Oh snap! An unknown error occurred.",
      code: 3,
    },
  ]

  public static withCode(
    code: number,
    interaction?: CommandInteraction
  ): Error | undefined {
    const error = ErrorHandler.Errors.find((e) => e.code === code)

    if (!error) return ErrorHandler.withCode(1, interaction)

    interaction?.reply(error.message)

    return error
  }

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
