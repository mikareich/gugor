import { Response } from "express"
import logCLI from "../../utils/logCLI"

function logErrorMsg(error: unknown, res: Response) {
  logCLI(
    error as string,
    "error",
    "/api/resources/waypoint/waypoint.controllers.ts"
  )

  if (error instanceof Error) {
    res.status(400).json({ error: error.message })
  }
}

export default logErrorMsg
