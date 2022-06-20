import { CommandInteraction } from "discord.js"
import ErrorHandler from "../../errorHandler/ErrorHandler"
import Waypoint from "../../../database/models/Waypoint"
import Subcommand from "../utils/Subcommand"
import { CommandOption } from "../../../interfaces"

class CreateWaypoint extends Subcommand {
  constructor() {
    const options: CommandOption[] = [
      {
        name: "name",
        description: "Name of the waypoint.",
        type: "STRING",
        required: true,
      },
      {
        name: "x",
        description: "X coordinate of the waypoint.",
        type: "INTEGER",
        required: true,
      },
      {
        name: "y",
        description: "Y coordinate of the waypoint.",
        type: "INTEGER",
        required: true,
      },
      {
        name: "z",
        description: "Z coordinate of the waypoint.",
        type: "INTEGER",
        required: true,
      },
      {
        name: "dimension",
        description: "Dimension of the waypoint.",
        type: "STRING",
        choices: [
          {
            name: "Overworld",
            value: "overworld",
          },
          {
            name: "Nether",
            value: "nether",
          },
          {
            name: "End",
            value: "end",
          },
        ],
      },
    ]

    super("create", "Creates a waypoint.", options)
  }

  async execute(interaction: CommandInteraction) {
    await interaction.deferReply()

    const name = interaction.options.getString("name")!
    const x = Number(interaction.options.getInteger("x")!)
    const y = Number(interaction.options.getInteger("y")!)
    const z = Number(interaction.options.getInteger("z")!)
    const dimension = interaction.options.getString("dimension") || "overworld"

    try {
      await Waypoint.create({
        name,
        dimension,
        coordinates: {
          x,
          y,
          z,
        },
      })

      interaction.editReply(`Waypoint ${name} created.`)
    } catch (error) {
      console.log(error)

      if (error instanceof Error) {
        ErrorHandler.custom(error.message, interaction, true)
      }
    }
  }
}

export default CreateWaypoint
