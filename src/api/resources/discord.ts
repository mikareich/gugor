import { Router, Request, Response } from "express"
import client from "../../bot/utils/client"
import envVariables from "../../utils/envVariables"

const router = Router()

router.get("/:username", async (req: Request, res: Response) => {
  const { username } = req.params

  const [name, discriminator] = username.split("#")

  const guild = client.guilds.resolve(envVariables.DC_FLUFFY_TUFFYS_GUILD_ID)
  const allUsers = await guild?.members.fetch()

  const user = allUsers?.find(
    (usr) =>
      usr.user.username === name &&
      usr.user.discriminator === discriminator &&
      !usr.user.bot
  )

  if (user) {
    res.status(200).json(user)
  } else {
    res.status(404).json({ error: "User not found" })
  }
})

export default router
