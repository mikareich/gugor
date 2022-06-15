import sendMessage from "../Discord/sendMessage"

interface Error {
  code: number
  message: string
}

class ErrorHandler {
  static Errors: Error[] = [
    { code: 1, message: "Command not found" },
    { code: 2, message: "Command Module not found" },
    { code: 3, message: "Error not found" },
    { code: 4, message: "Channel not found" },
  ]

  static withCode(code: number, sendFeedback?: boolean): Error {
    const error = ErrorHandler.Errors.find((e) => e.code === code)

    if (!error) {
      return ErrorHandler.withCode(3)
    }

    if (sendFeedback) {
      sendMessage(`❌ ${error.message}`)
    }

    return error
  }
}

export default ErrorHandler
