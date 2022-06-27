import { CommandInteraction } from "discord.js"
import axios from "axios"
import ErrorHandler from "../../errorHandler/ErrorHandler"
import convertWaypointObject from "../../utils/convertWaypointObject"
import Subcommand from "../../utils/Subcommand"
import { CommandOption } from "../../../interfaces"
import route from "../../../api/utils/route"

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
      const waypoint = await axios
        .get(route(`/waypoint`), {
          data: {
            name,
          },
          headers: { Authorization: "***" },
        })
        .then((res) => res.data[0])
        .then(convertWaypointObject)

      await interaction.editReply(waypoint || "No waypoint found.")
    } catch (error) {
      if (error instanceof Error) {
        await ErrorHandler.custom(error.message, interaction, true)
      }
    }
  }
}

export default GetWaypoint
