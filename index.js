/* eslint-disable global-require */
if (process.env.NODE_ENV === "prod") {
  require("@babel/register")({
    extensions: [".js", ".ts"],
  })

  require("./src/index")
} else {
  require("./lib/index")
}
