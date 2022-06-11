import Module from "./Module";
class Waypoint extends Module {
  static createWaypoint({ name, x, y, z }) {
    const waypoint = {
      name,
      coordinates: {
        x: parseFloat(x),
        y: parseFloat(y),
        z: parseFloat(z),
      },
    };

    console.log(waypoint);
  }

  static CommandMap = [
    {
      syntax: "set <name> <x> <y> <z>",
      description: "Creates a waypoint",
      execute: (commandString, dynamicArguments, msgObject) =>
        this.createWaypoint(dynamicArguments, msgObject),
    },
  ];

  constructor() {
    super("waypoint", Waypoint.CommandMap);
  }
}

export default Waypoint;
