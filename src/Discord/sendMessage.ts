import { Message, TextChannel } from "discord.js"
import ErrorHandler from "../ErrorHandling/ErrorHandler"
import botOptions from "../utils/botOptions"
import channels from "../utils/channels"
import client from "./client"

/**
 * It sends a message to a channel
 * @param message - The message you want to send.
 * @param channelID - The ID of the channel you want to send the message to.
 * @returns A promise that resolves to a message or undefined
 */
async function sendMessage(
  message: string,
  channelID = channels[botOptions.defaultChannel]
): Promise<Message | undefined> {
  // get the channel
  const channel = (await client.channels.fetch(channelID)) as
    | TextChannel
    | undefined

  // if the channel is not found, return undefined
  if (!channel) ErrorHandler.withCode(4, true)

  // send the message
  return channel?.send(message)
}

export default sendMessage
