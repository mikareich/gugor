import { Request, Response } from "express"
import { WorldDimension } from "../../../interfaces"
import logCLI from "../../../utils/logCLI"
import Waypoint from "./waypoint.model"

const logErrorMsg = (error: unknown, res: Response) => {
  logCLI(
    error as string,
    "error",
    "/api/resources/waypoint/waypoint.controllers.ts"
  )

  if (error instanceof Error) {
    res.status(400).json({ error: error.message })
  }
}

export async function getAllWaypoints(req: Request, res: Response) {
  try {
    const waypoints = await Waypoint.find()

    res.status(200).json(waypoints)
  } catch (error) {
    logErrorMsg(error, res)
  }
}

export async function getWaypoint(req: Request, res: Response) {
  try {
    const { name } = req.params
    const waypoint = await Waypoint.find({ name })

    res.status(200).json(waypoint)
  } catch (error) {
    logErrorMsg(error, res)
  }
}

interface CreateWaypointBody {
  name: string
  position: {
    dimension: WorldDimension
    coordinates: {
      x: number
      y: number
      z: number
    }
  }
}

export async function createWaypoint(
  req: Request<{}, {}, CreateWaypointBody>,
  res: Response
) {
  try {
    const waypointData = req.body

    const waypoint = await Waypoint.create(waypointData)

    res.status(200).json(waypoint)
  } catch (error) {
    logErrorMsg(error, res)
  }
}

export async function deleteWaypoint(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { name } = req.params

    const waypoint = await Waypoint.findOneAndDelete({ name })

    if (!waypoint) throw new Error(`Waypoint with id ${name} not found.`)
    res.status(200).json({ message: `Waypoint with id ${name} deleted.` })
  } catch (error) {
    logErrorMsg(error, res)
  }
}
