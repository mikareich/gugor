import { connect } from "mongoose"
import envVariables from "../../utils/envVariables"
import logCLI from "../../utils/logMessage"

/** Connects with the gugor database */
async function connectDB() {
  try {
    await connect(envVariables.MONGO_URI)

    logCLI("Connected to database", "success")
  } catch (error) {
    logCLI(error, "error")
  }
}

export default connectDB
