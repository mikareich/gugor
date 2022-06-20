import { inlineCode } from "@discordjs/builders"
import { CommandInteraction, CacheType } from "discord.js"
import ErrorHandler from "../../errorHandler/ErrorHandler"
import Waypoint from "../../models/Waypoint"
import waypointToString from "../../utils/waypointToString"
import Subcommand from "../utils/Subcommand"

class GetWaypoint extends Subcommand {
  constructor() {
    super("getall", "Returns all waypoints.")
  }

  async execute(interaction: CommandInteraction<CacheType>) {
    await interaction.deferReply()

    try {
      const waypoints = await Waypoint.find()
      if (waypoints.length === 0) throw new Error("No waypoints found.")

      const waypointList = waypoints.map(waypointToString)

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
