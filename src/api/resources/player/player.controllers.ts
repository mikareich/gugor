import { Request, Response } from "express"
import { PlayerRole, IPlayerStats } from "../../../interfaces"
import logErrorMsg from "../../utils/logError"
import Player from "./player.model"

export async function getAllPlayers(req: Request, res: Response) {
  try {
    const players = await Player.find()
    res.status(200).json(players)
  } catch (error) {
    logErrorMsg(error, res)
  }
}

export async function getPlayer(req: Request, res: Response) {
  try {
    const { id } = req.params

    const player = await Player.findById(id)
    res.status(200).json(player)
  } catch (error) {
    logErrorMsg(error, res)
  }
}

interface CreatePlayerBody {
  /** Discord id of the player */
  discordID: string
  /** Minecraft uuid */
  minecraftUUID: string
  /** Role of the player */
  role: PlayerRole
  /** Password */
  password: string
  /** Stats of the player */
  stats: IPlayerStats
}

export async function createPlayer(
  req: Request<{}, {}, CreatePlayerBody>,
  res: Response
) {
  try {
    const playerData = req.body

    const player = await Player.create(playerData)

    res.status(200).json(player)
  } catch (error) {
    logErrorMsg(error, res)
  }
}

export async function updatePlayerStats(
  req: Request<{ id: string }, {}, IPlayerStats>,
  res: Response
) {
  try {
    const { id } = req.params
    const statsToUpdate = req.body

    const update: { [key: string]: string } = {}
    Object.entries(statsToUpdate).forEach(([key, value]) => {
      update[`stats.${key}`] = value
    })

    const player = await Player.findByIdAndUpdate(id, update, { new: true })
    res.status(200).json(player)
  } catch (error) {
    logErrorMsg(error, res)
  }
}

export async function deletePlayer(req: Request, res: Response) {
  try {
    const { id } = req.params

    const player = await Player.findByIdAndDelete(id)
    if (!player) throw new Error(`Player with id ${id} not found.`)

    res.status(200).json(`Player with id ${id} deleted`)
  } catch (error) {
    logErrorMsg(error, res)
  }
}
