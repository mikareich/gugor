const form = document.getElementById("form")
const discordUsernameINPUT = document.getElementById("discordUsername")
const minecraftUsernameINPUT = document.getElementById("minecraftUsername")
const passwordINPUT = document.getElementById("password")
const errorMessageSPAN = document.getElementById("errorMessage")

form.addEventListener("submit", async (e) => {
  e.preventDefault()

  const discordUsername = discordUsernameINPUT.value.replace("#", "%23") //
  const minecraftUsername = minecraftUsernameINPUT.value
  const password = passwordINPUT.value

  // fetch minecraft uuid
  const { uuid: minecraftUUID } = await fetch(
    `https://api.ashcon.app/mojang/v2/user/${minecraftUsername}`
  ).then((res) => res.json())

  // fetch discord user
  const { userId: discordID } = await fetch(
    `https://gugor-myeqf.ondigitalocean.app/api/discord/${discordUsername}`
  ).then((res) => res.json())

  fetch("https://gugor-myeqf.ondigitalocean.app/api/player/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      minecraftUUID,
      discordID,
      password,
      role: "default",
    }),
  })
    // log error message if any
    .then((response) => {
      if (response.status >= 400 && response.status < 600)
        throw new Error("Bad response from server")
    })
    .catch(() => {
      errorMessageSPAN.classList.remove("invisible")
    })
})
