import { REST } from "@discordjs/rest"
import { Routes } from "discord-api-types/v9"
import Command from "../commands/utils/Command"

const { DC_TOKEN, DC_CLIENT_ID, DC_FLUFFY_TUFFYS_GUILD_ID } = process.env

async function registerCommands(commands: Command[]) {
  const rest = new REST({ version: "9" }).setToken(DC_TOKEN!)

  try {
    await rest.put(
      Routes.applicationGuildCommands(
        DC_CLIENT_ID!,
        DC_FLUFFY_TUFFYS_GUILD_ID!
      ),
      {
        body: commands.map((command) => command.toACO()),
      }
    )

    console.log("Successfully reloaded application (/) commands.")
  } catch (error) {
    console.error(error)
  }
}

export default registerCommands
