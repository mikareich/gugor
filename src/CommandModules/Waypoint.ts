import { DynamicArguments } from "../utils/processCommand"
import CommandModule, { CommandMap } from "./CommandModule"

class Waypoint extends CommandModule {
  static CommandMap: CommandMap = [
    {
      syntax: "set <name> <x> <y> <z>",
      description: "Creates a waypoint",
      execute: (dynamicArguments) => this.createWaypoint(dynamicArguments),
    },
  ]

  private static createWaypoint({ name, x, y, z }: DynamicArguments) {
    const waypoint = {
      name,
      coordinates: {
        x: parseFloat(x),
        y: parseFloat(y),
        z: parseFloat(z),
      },
    }

    console.log(waypoint)
  }

  constructor() {
    super("waypoint", Waypoint.CommandMap)
  }
}

export default Waypoint
