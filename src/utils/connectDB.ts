import { connect } from "mongoose"

const { MONGO_URI } = process.env

/** Connects with the gugor database */
async function connectDB() {
  try {
    await connect(MONGO_URI!)
    console.log("Successfully connected to database.")
  } catch (error) {
    console.error(error)
  }
}

export default connectDB
