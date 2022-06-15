import "dotenv/config"
import handleMessage from "./Discord/handleMessage"
import Waypoint from "./CommandModules/Waypoint"
import Julia from "./CommandModules/Julia"
import client from "./Discord/client"

client.on("ready", () => {
  // sendMessage("Hello World!")
  console.log("Ready!")
})

const commandModules = [new Waypoint(), new Julia()]
client.on("message", (message) => {
  handleMessage(message, commandModules)
})
