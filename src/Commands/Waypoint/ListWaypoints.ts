import { CommandInteraction, CacheType } from "discord.js"
import Subcommand from "../utils/Subcommand"

class GetWaypoint extends Subcommand {
  constructor() {
    super("getall", "Returns all waypoints.")
  }

  execute(interaction: CommandInteraction<CacheType>): void | Promise<void> {
    // interact with db
    interaction.reply("All waypoints: ")
  }
}

export default GetWaypoint
