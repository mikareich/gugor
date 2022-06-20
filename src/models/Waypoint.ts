import { model, Schema } from "mongoose"

export interface IWaypoint {
  name: string
  dimension: "overworld" | "nether" | "end"
  coordinates: {
    x: number
    y: number
    z: number
  }
}

export const WaypointSchema = new Schema(
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

export default model<IWaypoint>("Waypoint", WaypointSchema)
