/**
 * Formats command into given syntax
 * @param {string} commandString Command string
 * @param {string} syntax Syntax string
 * @returns {object} Formated command
 */
export function getDynamicArguments(commandString, syntax) {
  const commandArguments = commandString.split(" ");
  const syntaxObject = formatSyntax(syntax);

  // asign value to dynamic arguments
  const dynamicArguments = {};

  syntaxObject.forEach((syntaxArgument) => {
    if (!syntaxArgument.dynamic) return;

    dynamicArguments[syntaxArgument.argument] =
      commandArguments[syntaxArgument.index];
  });

  return dynamicArguments;
}

/**
 * Formats syntax string into object
 * @param {string} commandMapString Command map
 * @returns {object} Formated syntax object
 */
export function formatSyntax(commandMapString) {
  const syntaxArguments = commandMapString.split(" ");

  // format arguments
  const formatedArguments = syntaxArguments.map((argument, index) => {
    // determine whether this is an dynamic argument or not
    const dynamic = argument.startsWith("<") && argument.endsWith(">");

    const formatedArgument = {
      index,
      argument,
      dynamic: dynamic,
    };

    // if its dynamic, remove the <>
    if (dynamic) {
      formatedArgument.argument = argument.substring(1, argument.length - 1);
    }

    return formatedArgument;
  });

  // merge static arguments
  const mergedSyntaxObject = formatedArguments.reduce((acc, argument, i) => {
    const argumentBefore = acc[i - 1];
    if (!argument.dynamic && argumentBefore?.dynamic === false) {
      argumentBefore.argument += " " + argument.argument;
      return [...acc];
    }

    return [...acc, argument];
  }, []);

  return mergedSyntaxObject;
}

/**
 * Checks whether a command matches a given syntax
 * @param {string} commandString Command string
 * @param {string} syntax Syntax string
 * @returns Command string are matching
 */
export function matchingSyntax(commandString, syntax) {
  const commandArguments = commandString.split(" ");
  const syntaxArguments = formatSyntax(syntax);

  // check if number of arguments is matching
  const isLongEnough =
    syntaxArguments[syntaxArguments.length - 1].index ===
    commandArguments.length - 1;

  // check if all static parts in the command are included
  const allPartsIncluded = syntaxArguments.every((part, index) => {
    if (part.dynamic) return true;
    const startIndex = part.index;
    const endIndex = syntaxArguments[index + 1]?.index || startIndex;
    const commandArgument = commandArguments
      .slice(startIndex, endIndex)
      .join(" ");

    return commandArgument === part.argument;
  });

  return isLongEnough && allPartsIncluded;
}
