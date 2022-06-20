import { inlineCode } from "@discordjs/builders"
import { CommandInteraction, CacheType } from "discord.js"
import { CommandOption } from "../utils/CommandOption"
import Subcommand from "../utils/Subcommand"

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

  execute(interaction: CommandInteraction<CacheType>): void | Promise<void> {
    const name = interaction.options.getString("name")!
    // interact with db
    interaction.reply(`Waypoint ${inlineCode(name)} deleted.`)
  }
}

export default DeleteWaypoint
