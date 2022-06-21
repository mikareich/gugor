import { model, Schema } from "mongoose"
import { Waypoint } from "../../../interfaces"

const WaypointSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    dimension: {
      type: String,
      required: true,
      enum: ["overworld", "nether", "end"],
    },
    coordinates: {
      type: {
        x: Number,
        y: Number,
        z: Number,
      },
      required: true,
    },
  },
  {
    collection: "waypoints",
    timestamps: true,
  }
)

export default model<Waypoint>("Waypoint", WaypointSchema)
