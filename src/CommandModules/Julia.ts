import CommandModule from "./CommandModule"

class Julia extends CommandModule {
  static CommandMap = [
    {
      syntax: "",
      description: "Easter egg",
      execute: () => console.log("Easter egg"),
    },
  ]

  constructor() {
    super("julia", Julia.CommandMap)
  }
}

export default Julia
