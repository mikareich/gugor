export interface Argument {
  startsAt: number
  syntax: string
  dynamic: boolean
  value?: string
}

/**
 * Formats syntax string into object
 * @param syntaxString Syntax string
 * @returns Arguments of syntax
 */
export function formatSyntax(syntaxString: string): Argument[] {
  const splittedSyntaxString = syntaxString.split(" ")

  // format arguments
  const formatedArguments = splittedSyntaxString.map(
    (argumentString, index) => {
      // determine whether this is an dynamic argument or not
      const dynamic =
        argumentString.startsWith("<") && argumentString.endsWith(">")

      const formatedArgument: Argument = {
        startsAt: index,
        syntax: argumentString,
        dynamic,
      }

      // if its dynamic, remove the <>
      if (dynamic) formatedArgument.syntax = argumentString.slice(1, -1)

      return formatedArgument
    }
  )

  // merge static arguments
  // e.g. ["waypoint", "set", "<name>"] -> ["waypoint set", "<name>"]
  const mergedArguments = formatedArguments.reduce((acc, argument, i) => {
    const argumentBefore = acc[i - 1]
    if (!argument.dynamic && argumentBefore?.dynamic === false) {
      argumentBefore.syntax += ` ${argument.syntax}`
      return [...acc]
    }

    return [...acc, argument]
  }, [] as Argument[])

  return mergedArguments
}

export interface DynamicArguments {
  [key: string]: string
}

/**
 * Formats command into given syntax
 * @param absoluteCommandString Command string
 * @param syntaxString Syntax string
 * @returns Formated command
 */
export function getDynamicArguments(
  absoluteCommandString: string,
  syntaxString: string
): DynamicArguments {
  const commandArguments: string[] = absoluteCommandString.split(" ")
  const syntaxObject = formatSyntax(syntaxString)

  const dynamicArguments: DynamicArguments = {}

  // asign value to dynamic arguments
  syntaxObject.forEach((argument) => {
    if (!argument.dynamic) return

    const value = commandArguments[argument.startsAt]
    dynamicArguments[argument.syntax] = value
  })

  return dynamicArguments
}

/**
 * Checks whether a command matches a given syntax
 * @param {string} absoluteCommandString Command string
 * @param {string} syntaxString Syntax string
 * @returns Command string are matching
 */
export function matchingSyntax(
  absoluteCommandString: string,
  syntaxString: string
): boolean {
  const commandArguments = absoluteCommandString.split(" ")
  const syntaxArguments = formatSyntax(syntaxString)

  // check if number of arguments is matching
  const isLongEnough =
    syntaxArguments[syntaxArguments.length - 1].startsAt ===
    commandArguments.length - 1

  // check if all static parts in the command are included
  const allPartsIncluded = syntaxArguments.every((part, index) => {
    if (part.dynamic) return true

    const startIndex = part.startsAt
    const endIndex = syntaxArguments[index + 1]?.startsAt || startIndex + 1

    const absoluteValue = commandArguments.slice(startIndex, endIndex).join(" ")
    return absoluteValue === part.syntax
  })

  return isLongEnough && allPartsIncluded
}
