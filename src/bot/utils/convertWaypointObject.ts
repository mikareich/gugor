import { inlineCode } from "@discordjs/builders"
import { IWaypoint } from "../../database/models/Waypoint"

/**
 * Converts a waypoint to a string.
 * @param waypoint Waypoint to convert to string.
 * @returns Waypoint as string.
 */
function convertWaypointObject(waypoint: IWaypoint): string {
  return `${waypoint.name} (${waypoint.dimension}):\n${inlineCode(
    `${waypoint.coordinates.x}, ${waypoint.coordinates.y}, ${waypoint.coordinates.z}`
  )}`
}

export default convertWaypointObject
