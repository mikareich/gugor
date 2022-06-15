import sendMessage from "../Discord/sendMessage"
import { DynamicArguments } from "../utils/processCommand"
import CommandModule, { CommandMap } from "./CommandModule"

class Waypoint extends CommandModule {
  constructor() {
    const commandMap: CommandMap = [
      {
        syntax: "set <name> <x> <y> <z>",
        description: "Creates a waypoint",
        execute: (dynamicArguments) => this.createWaypoint(dynamicArguments),
      },
      {
        syntax: "get <name>",
        description: "Gets a waypoint",
        execute: (dynamicArguments) => this.getWaypoint(dynamicArguments),
      },
      {
        syntax: "list",
        description: "Lists all waypoints",
        execute: () => this.listWaypoints(),
      },
    ]

    super("waypoint", commandMap)
  }

  private createWaypoint({ name }: DynamicArguments) {
    sendMessage(`🗺️ Waypoint \`${name}\` created!`)
  }

  private getWaypoint({ name }: DynamicArguments) {
    sendMessage(`🗺️ Waypoint \`${name}\` not found!`)
  }

  private listWaypoints() {
    sendMessage(`🗺️ No waypoints created`)
  }
}

export default Waypoint
