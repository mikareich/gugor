import { inlineCode } from "@discordjs/builders"
import { IWaypoint } from "../../interfaces"

/**
 * Converts a waypoint to a string.
 * @param waypoint Waypoint to convert to string.
 * @returns Waypoint as string.
 */
function convertWaypointObject(waypoint: IWaypoint): string {
  const { name, position } = waypoint
  const { dimension, coordinates } = position

  return `${name} (${dimension}): ${inlineCode(
    `${coordinates.x}, ${coordinates.y}, ${coordinates.z}`
  )}`
}

export default convertWaypointObject
