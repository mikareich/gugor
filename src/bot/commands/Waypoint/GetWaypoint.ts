import { CommandInteraction } from "discord.js"
import ErrorHandler from "../../errorHandler/ErrorHandler"
import Waypoint from "../../../database/models/Waypoint"
import convertWaypointObject from "../../utils/convertWaypointObject"
import Subcommand from "../utils/Subcommand"
import { CommandOption } from "../../../interfaces"

class GetWaypoint extends Subcommand {
  constructor() {
    const options: CommandOption[] = [
      {
        name: "name",
        description: "Name of the waypoint.",
        type: "STRING",
        required: true,
      },
    ]

    super("get", "Returns coordinates of a waypoint", options)
  }

  async execute(interaction: CommandInteraction) {
    await interaction.deferReply()

    const name = interaction.options.getString("name")!

    try {
      const waypoint = await Waypoint.findOne({ name })
      if (!waypoint) throw new Error("Waypoint not found.")

      await interaction.editReply(convertWaypointObject(waypoint))
    } catch (error) {
      if (error instanceof Error) {
        await ErrorHandler.custom(error.message, interaction, true)
      }
    }
  }
}

export default GetWaypoint
