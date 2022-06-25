import { Request, Response } from "express"
import Waypoint from "./waypoint.model"
import { WaypointDimension } from "../../../interfaces"

interface CreateWaypointBody {
  name?: string
  dimension?: WaypointDimension
  coordinates?: {
    x?: number
    y?: number
    z?: number
  }
}

export async function getWaypoint(req: Request<{}, {}, any>, res: Response) {
  try {
    const query = req.body

    const waypoint = await Waypoint.find(query)
    if (!waypoint) throw new Error("Waypoint not found.")

    res.status(200).json(waypoint)
  } catch (error) {
    console.error(error)

    if (error instanceof Error) {
      res.status(400).json({ error: error.message })
    }
  }
}

export async function getAllWaypoints(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const waypoints = await Waypoint.find()
    if (waypoints.length === 0) throw new Error("No waypoints found.")

    res.status(200).json(waypoints)
  } catch (error) {
    console.error(error)

    if (error instanceof Error) {
      res.status(400).json({ error: error.message })
    }
  }
}

export async function createWaypoint(
  req: Request<{}, {}, CreateWaypointBody>,
  res: Response
) {
  try {
    const { name, dimension, coordinates } = req.body

    if (!name) throw new Error("Name is required.")
    if (!dimension) throw new Error("Dimension is required.")
    if (!coordinates) throw new Error("Coordinates are required.")

    const waypoint = await Waypoint.create({
      name,
      dimension,
      coordinates,
    })

    res.status(201).json(waypoint)
  } catch (error) {
    console.error(error)

    if (error instanceof Error) {
      res.status(400).json({ error: error.message })
    }
  }
}

export async function deleteWaypoint(
  req: Request<{}, {}, { name?: string }>,
  res: Response
): Promise<void> {
  try {
    const { name } = req.body

    if (!name) throw new Error("Name is required.")

    const waypoint = await Waypoint.findOne({ name })
    if (!waypoint) throw new Error("Waypoint not found.")

    await waypoint.delete()

    res.status(200).json({ message: `Waypoint ${name} deleted.` })
  } catch (error) {
    console.error(error)

    if (error instanceof Error) {
      res.status(400).json({ error: error.message })
    }
  }
}
