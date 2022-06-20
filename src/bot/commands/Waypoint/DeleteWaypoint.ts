import { CommandInteraction } from "discord.js"
import ErrorHandler from "../../errorHandler/ErrorHandler"
import Waypoint from "../../../database/models/Waypoint"
import Subcommand from "../../utils/Subcommand"
import { CommandOption } from "../../../interfaces"

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
      const waypoint = await Waypoint.findOne({ name })
      if (!waypoint) throw new Error("Waypoint not found.")

      await waypoint.delete()

      interaction.editReply(`Waypoint ${waypoint.name} deleted.`)
    } catch (error) {
      console.error(error)

      if (error instanceof Error) {
        console.log(interaction.replied)
        await ErrorHandler.custom(error.message, interaction, true)
      }
    }
  }
}

export default DeleteWaypoint
