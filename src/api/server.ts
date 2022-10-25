import express, { json, Request, Response, NextFunction } from "express"
import cors from "cors"
import connectDB from "./utils/connectDB"
import waypointRouter from "./resources/waypoint/waypoint.router"
import playerRouter from "./resources/player/player.router"
import logCLI from "../utils/logCLI"

const PORT = process.env.PORT || 3000
const app = express()

function loggerMiddleware(
  request: Request,
  response: Response,
  next: NextFunction
) {
  logCLI(request, "info", "/api/server.ts")
  next()
}

app.use(cors())
app.use(json())
app.use(loggerMiddleware)

app.get("/", (req, res) => res.send("Hey welcome"))

app.use("/api/waypoint", waypointRouter)
app.use("/api/player", playerRouter)

async function startServer() {
  await connectDB()

  try {
    app.listen(PORT, () => {
      logCLI(`Server started on port ${PORT}`, "success", "/api/server.ts")
    })
  } catch (error) {
    logCLI(error, "error", "/api/server")
  }
}

export default startServer
