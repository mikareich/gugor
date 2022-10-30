import { Router } from "express"
import {
  createPlayer,
  deletePlayer,
  getAllPlayers,
  getPlayer,
  updatePlayerStats,
} from "./player.controllers"

const router = Router()

router.get("/", getAllPlayers)

router.get("/:id", getPlayer)

router.post("/", createPlayer)

router.put("/updateStats/:id", updatePlayerStats)

router.delete("/:id", deletePlayer)

export default router
