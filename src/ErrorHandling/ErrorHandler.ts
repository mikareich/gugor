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
  ]

  public static withCode(
    code: number,
    sendFeedback?: CommandInteraction
  ): Error | undefined {
    const error = ErrorHandler.Errors.find((e) => e.code === code)

    if (!error) return ErrorHandler.withCode(1, sendFeedback)

    sendFeedback?.reply(error.message)

    return error
  }

  public static custom(message: string, sendFeedback?: CommandInteraction) {
    sendFeedback?.reply(message)
  }
}

export default ErrorHandler
