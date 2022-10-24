/* eslint-disable global-require */
if (process.env.DEV_ENV === "true") {
  console.log("Development environment")
  require("@babel/register")({
    extensions: [".js", ".ts"],
  })

  require("./src/index")
} else {
  console.log("Production environment")
  require("./lib/index")
}
