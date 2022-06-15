import sendMessage from "../Discord/sendMessage"
import CommandModule, { CommandMap } from "./CommandModule"

class Julia extends CommandModule {
  constructor() {
    const commandMap: CommandMap = [
      {
        syntax: "",
        description: "Easter egg",
        execute: () => this.randomJoke(),
      },
    ]

    super("julia", commandMap)
  }

  /**
   * Fetches a random joke from dadjoke.io and sends it to the channel
   */
  private async randomJoke() {
    const response = await fetch("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json",
      },
    })

    const data = await response.json()

    await sendMessage(data.joke)
  }
}

export default Julia
