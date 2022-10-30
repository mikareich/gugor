import { Router } from "express"
import {
  createWaypoint,
  deleteWaypoint,
  getAllWaypoints,
  getWaypoint,
} from "./waypoint.controllers"

const router = Router()

router.get("/", getAllWaypoints)

router.get("/:name", getWaypoint)

router.post("/", createWaypoint)

router.delete("/:name", deleteWaypoint)

export default router
