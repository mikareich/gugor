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

export const ALL_OPTION_TYPES = [
  "SUB_COMMAND",
  "SUB_COMMAND_GROUP",
  "STRING",
  "INTEGER",
  "BOOLEAN",
  "USER",
  "CHANNEL",
  "ROLE",
  "MENTIONABLE",
  "NUMBER",
  "ATTACHMENT",
]
