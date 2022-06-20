import { CommandInteraction } from "discord.js"
import ErrorHandler from "../../errorHandler/ErrorHandler"
import Waypoint from "../../../database/models/Waypoint"
import convertWaypointObject from "../../utils/convertWaypointObject"
import Subcommand from "../../utils/Subcommand"

class GetWaypoint extends Subcommand {
  constructor() {
    super("getall", "Returns all waypoints.")
  }

  async execute(interaction: CommandInteraction) {
    await interaction.deferReply()

    try {
      const waypoints = await Waypoint.find()
      if (waypoints.length === 0) throw new Error("No waypoints found.")

      const waypointList = waypoints.map(convertWaypointObject)

      interaction.editReply(`${waypointList.join("\n\n")}`)
    } catch (error) {
      console.error(error)

      if (error instanceof Error) {
        ErrorHandler.custom(error.message, interaction, true)
      }
    }
  }
}

export default GetWaypoint
