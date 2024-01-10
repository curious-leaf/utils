/**
 * Utility functions for generating random values.
 */

/**
 * Returns a random hexadecimal color code.
 * @returns A string representing a random hexadecimal color code.
 */
export const getRandomColor = (): string => {
  return Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")
}

/**
 * Returns a random string of characters.
 * @returns A string representing a random string of characters.
 */
export const getRandomString = (): string => {
  return Math.random().toString(36).substring(2, 15)
}

/**
 * Returns a random property value from an object.
 * @param obj - The object to get a random property value from.
 * @returns A random property value from the object.
 */
export const getRandomProperty = <T>(obj: { [key: string]: T }): T => {
  const keys = Object.keys(obj)
  const randomKey = keys[Math.floor(keys.length * Math.random())]!

  return obj[randomKey]!
}
