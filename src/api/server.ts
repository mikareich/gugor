import express, { json } from "express"
import cors from "cors"
import connectDB from "./utils/connectDB"
import waypointRouter from "./resources/waypoint/waypoint.router"
import logCLI from "../utils/logMessage"

const PORT = process.env.PORT || 3000
const app = express()

app.use(json())
app.use(cors())

app.get("/", (req, res) => res.send("Hey welcome"))

app.use("/api/waypoint", waypointRouter)

export default async function startServer() {
  await connectDB()

  try {
    app.listen(PORT, () => {
      logCLI(`Server started on port ${PORT}`, "success")
    })
  } catch (error) {
    logCLI(error, "error")
  }
}
