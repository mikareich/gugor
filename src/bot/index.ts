import startBot from "./bot"
import Gugor from "./commands/Gugor"
import Waypoint from "./commands/Waypoint"

const commands = [new Waypoint(), new Gugor()]

startBot(commands)
