import startBot from "./bot"
import Waypoint from "./commands/Waypoint"

const commands = [new Waypoint()]

startBot(commands)
