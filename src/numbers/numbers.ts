/**
 * Utility functions for working with numbers.
 */

/**
 * Generates a random number between the specified minimum and maximum values (inclusive).
 *
 * @param min The minimum value for the random number.
 * @param max The maximum value for the random number.
 * @returns A random number between the specified minimum and maximum values.
 */
export const getRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

/**
 * Keep a number within a specified range.
 * @param value - The number to keep within the range.
 * @param min - The minimum value of the range.
 * @param max - The maximum value of the range.
 * @returns The number within the specified range.
 */
export const keepNumberInRange = (value: number, min?: number, max?: number) => {
  if (min !== undefined && max !== undefined) {
    return Math.min(Math.max(value, min), max)
  }
  if (min !== undefined) {
    return Math.max(value, min)
  }
  if (max !== undefined) {
    return Math.min(value, max)
  }

  return value
}

/**
 * Parse a string into a numeric value.
 * @param string - The string to parse.
 * @returns The parsed numeric value, or the original string if it cannot be parsed.
 */
export const parseNumericValue = (string: string) => {
  const number = parseFloat(string)

  return Number.isNaN(number) ? string : number
}
