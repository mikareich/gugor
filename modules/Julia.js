import Module from "./Module";

class Julia extends Module {
  static CommandMap = [
    {
      syntax: "",
      description: "Easter egg",
      execute: (commandString, dynamicArguments, msgObject) =>
        msgObject.channel.send(":|"),
    },
  ];

  constructor() {
    super("julia", Julia.CommandMap);
  }
}

export default Julia;
