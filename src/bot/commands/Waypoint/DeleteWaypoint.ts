import { CommandInteraction } from "discord.js"
import axios from "axios"
import ErrorHandler from "../../errorHandler/ErrorHandler"
import Subcommand from "../../utils/Subcommand"
import { CommandOption, Waypoint } from "../../../interfaces"
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
      const waypoint = (await axios
        .get(route("/waypoint"))
        .then((res) => res.data[0])) as Waypoint

      await axios.delete(route(`/waypoint`), {
        data: {
          id: waypoint._id,
        },
        headers: { Authorization: "***" },
      })

      interaction.editReply(`Waypoint ${name} deleted.`)
    } catch (error) {
      logCLI(error, "error")

      if (error instanceof Error) {
        await ErrorHandler.custom(error.message, interaction, true)
      }
    }
  }
}

export default DeleteWaypoint
