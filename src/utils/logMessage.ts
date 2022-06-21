type Status = "success" | "error" | "warning" | "info"

const statusEmojis = {
  success: "✅",
  error: "❌",
  warning: "⚠️",
  info: "ℹ️",
}

function logCLI(message: string | unknown, status: Status = "info") {
  const emoji = statusEmojis[status]

  if (status === "error") {
    console.error(`${emoji} ${message}`)
  }

  console.log(`[${emoji}] ${message}`)
}

export default logCLI
