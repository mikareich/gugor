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
        x: {
          type: Number,
          validate: {
            validator: Number.isInteger,
            message: "{VALUE} is not an integer value",
          },
        },
        y: {
          type: Number,
          validate: {
            validator: Number.isInteger,
            message: "{VALUE} is not an integer value",
          },
        },
        z: {
          type: Number,
          validate: {
            validator: Number.isInteger,
            message: "{VALUE} is not an integer value",
          },
        },
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
