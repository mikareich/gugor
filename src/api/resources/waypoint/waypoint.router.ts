import { Router } from "express"
import {
  createWaypoint,
  deleteWaypoint,
  getWaypoint,
} from "./waypoint.controllers"

const router = Router()

router.get("/", getWaypoint)

router.post("/create", createWaypoint)

router.delete("/delete", deleteWaypoint)

export default router
