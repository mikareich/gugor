import { TextChannel } from "discord.js"
import ErrorHandler from "../ErrorHandling/ErrorHandler"
import botOptions from "../utils/botOptions"
import channels from "../utils/channels"
import client from "./client"

async function sendMessage(
  message: string,
  channelID = channels[botOptions.defaultChannel]
) {
  const channel = (await client.channels.fetch(channelID)) as
    | TextChannel
    | undefined

  if (!channel) return ErrorHandler.withCode(4) // channel not found

  return channel.send(message)
}

export default sendMessage
