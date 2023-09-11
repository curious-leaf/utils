/**
 * Utility functions for parsing and stringifying JSON.
 */

/**
 * Parses a string as JSON and returns the result. If the string cannot be parsed as JSON, returns the original string.
 * @param value - The string to parse as JSON.
 * @returns The parsed JSON object or the original string.
 * @template T - The type of the parsed JSON object.
 */
export const maybeParseJson = <T>(value: string) => {
  try {
    return JSON.parse(value) as T
  } catch {
    return value
  }
}

/**
 * Returns a JSON string representation of the given object, or the original string if it's not an object.
 * @param value - The value to stringify.
 * @returns The JSON string representation of the object, or the original string if it's not an object.
 */
export const maybeStringifyJson = (value?: object | string) => {
  if (typeof value === "object") {
    return JSON.stringify(value)
  }

  return value
}
