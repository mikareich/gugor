import Command from "../utils/Command"
import CreateWaypoint from "./CreateWaypoint"

class Waypoint extends Command {
  constructor() {
    super("waypoint", "Manages waypoints.", [new CreateWaypoint()])
  }
}

export default Waypoint
