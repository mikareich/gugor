/** Querys by intern ID */
export interface IDQuery {
  /** Intern ID */
  id: string
}

/** World dimensions of the Minecraft world */
export type WorldDimension = "overworld" | "nether" | "end"

/** Position in Minecraft world */
interface IPosition {
  /** World Dimension */
  dimension: WorldDimension
  /** Coordinates of the player */
  coordinates: {
    x: number
    y: number
    z: number
  }
}

/** Specific position in a Minecraft world */
export interface IWaypoint {
  /** Intern ID of the waypoint */
  _id: string
  /** Name of the waypoint */
  name: string
  /** Creation date */
  createdAt: string
  /** Last time updated */
  updatedAt: string
  /** Position of the waypoint */
  position: IPosition
}

/** Different player roles */
export type PlayerRole = "admin" | "operator" | "default"

export interface IPlayerStats {
  /** How many times the player has already died in the Minecraft world */
  numberOfDeaths?: number
  /** Number of levels */
  level?: number
  /** Lives of the player */
  lives?: number
  /** Position of the player in the Minecraft world */
  position?: {
    /** World Dimension */
    dimension: "overworld" | "nether" | "end"
    /** Coordinates of the player */
    coordinates: {
      x: number
      y: number
      z: number
    }
  }
}
/** Represents a Minecraft player */
export interface IPlayer {
  /** Intern ID of the player */
  _id: string
  /** Discord id of the player */
  discordID: string
  /** Minecraft uuid */
  minecraftUUID: string
  /** Role of the player */
  role: PlayerRole
  /** Password */
  password: string
  /** Tracked waypoint of player */
  trackedWaypoint: string
  /** Minecraft game stats */
  stats: IPlayerStats
  /** Creation date */
  createdAt: string
  /** Last time updated */
  updatedAt: string
}

/** Representation of an error */
export interface Error {
  /** Message of the error */
  message: string
  /** Code of the error */
  code: number
}

/**
 * Represents of a command, subcommand, or option.
 */
export interface ApplicationCommandObject {
  /** Name of the command, subcommand, or option */
  name: string
  /** Description of the command, subcommand, or option */
  description: string
  /** Options of the command or subcommand */
  options?: ApplicationCommandObject[]
  /** Type of the subcommand, or option (commands don't have a specific type) */
  type?: number
  /** Whether the option is required */
  required?: boolean
  /** Choices of the option (only for "STRING" and "INTEGER" option types) */
  choices?: { name: string; value: string }[]
}

/** Posible option types */
export type OptionType =
  | "STRING"
  | "INTEGER"
  | "BOOLEAN"
  | "USER"
  | "CHANNEL"
  | "ROLE"
  | "MENTIONABLE"
  | "NUMBER"
  | "ATTACHMEN"

/** Option of a command */
export interface CommandOption {
  /** Name of the option */
  name: string

  /** Description of the option */
  description: string

  /** Type of the option */
  type: OptionType

  /** Whether option is required */
  required?: boolean

  /** Possible answeres */
  choices?: { name: string; value: string }[]
}
