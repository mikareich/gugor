import { CommandInteraction } from "discord.js"
import axios from "axios"
import ErrorHandler from "../../errorHandler/ErrorHandler"
import Subcommand from "../../utils/Subcommand"
import { CommandOption } from "../../../interfaces"
import route from "../../../api/utils/route"
import logCLI from "../../../utils/logCLI"

class DeleteWaypoint extends Subcommand {
  constructor() {
    const options: CommandOption[] = [
      {
        name: "name",
        description: "Name of the waypoint.",
        type: "STRING",
        required: true,
      },
    ]

    super("delete", "Deletes a waypoint.", options)
  }

  async execute(interaction: CommandInteraction) {
    await interaction.deferReply()

    const name = interaction.options.getString("name")!

    try {
      await axios.delete(route(`/waypoint/${name}`), {
        headers: { Authorization: "***" },
      })

      interaction.editReply(`Waypoint ${name} deleted.`)
    } catch (error) {
      logCLI(error, "error", "/bot/commands/Waypoint/DeleteWaypoint.ts")

      if (error instanceof Error) {
        ErrorHandler.withCode(3, interaction, error.message)
      }
    }
  }
}

export default DeleteWaypoint
