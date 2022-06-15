import channels from "./channels"

const botOptions = {
  commandPrefix: "/gugor",
  defaultChannel: "test:waypoints" as keyof typeof channels,
}

export default botOptions
