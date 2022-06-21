import { CommandInteraction } from "discord.js"
import axios from "axios"
import ErrorHandler from "../../errorHandler/ErrorHandler"
import convertWaypointObject from "../../utils/convertWaypointObject"
import Subcommand from "../../utils/Subcommand"
import route from "../../../api/utils/route"

class GetWaypoint extends Subcommand {
  constructor() {
    super("getall", "Returns all waypoints.")
  }

  async execute(interaction: CommandInteraction) {
    await interaction.deferReply()

    try {
      const waypointList = await axios
        .get(route("/waypoint"))
        .then((res) => res.data)
        .then((waypoints) => waypoints.map(convertWaypointObject))

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
