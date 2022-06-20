/** World dimension of the waypoint */
export type WaypointDimension = "overworld" | "nether" | "end"

/** Specific position in a Minecraft world */
export interface Waypoint {
  /** Name of the waypoint */
  name: string
  /** World dimension of the waypoint */
  dimension: WaypointDimension
  /** Position of the waypoint */
  coordinates: {
    x: number
    y: number
    z: number
  }
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
