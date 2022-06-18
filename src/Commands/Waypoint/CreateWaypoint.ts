import { codeBlock, inlineCode } from "@discordjs/builders"
import { CommandInteraction, CacheType } from "discord.js"
import { CommandOption } from "../utils/CommandOption"
import Subcommand from "../utils/Subcommand"

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
    ]

    super("create", "Creates a waypoint.", options)
  }

  execute(interaction: CommandInteraction<CacheType>): void | Promise<void> {
    const name = interaction.options.getString("name")!
    // interact with db
    interaction.reply(`Creating waypoint ${inlineCode(name)}`)
  }
}

export default CreateWaypoint
