/**
 * A collection of helper functions used throughout the application.
 */

/**
 * Generates an array of numbers
 * @param start The start of the range
 * @param end The end of the range
 * @returns An array of numbers
 */
/**
 * A utility function that generates an array of numbers within a specified range.
 * @param start - The starting number of the range.
 * @param end - The ending number of the range.
 * @returns An array of numbers within the specified range.
 */
export const range = (start: number, end: number) => {
	const length = end - start + 1

	return Array.from({ length }, (_, idx) => idx + start)
}

/**
 * Capitalizes the first letter of a string.
 * @param value - The string to capitalize.
 * @return The capitalized string.
 */
export const capitalize = (value: string) => {
	return value.charAt(0).toUpperCase() + value.slice(1)
}

/**
 * Converts a string to title case.
 * @param string - The string to convert.
 * @returns The converted string.
 */
export const toTitleCase = (string: string | undefined) => {
	return string?.toLowerCase().split(" ").map(capitalize).join(" ")
}

/**
 * Converts a string to slug case.
 * @param string - The string to convert.
 * @returns The converted string.
 */
export const toSlugCase = (string?: string) => {
	let slug = string || ""

	slug = slug.toLowerCase()
	slug = slug.replace(/^\s+|\s+$/g, "")
	slug = slug.replace(/[^a-z0-9 -]/g, "")
	slug = slug.replace(/\s+/g, "-")
	slug = slug.replace(/-+/g, "-")

	return encodeURI(slug)
}

/**
 * Strip html tags from a string
 * @param string - string to strip tags from
 * @returns string without html tags
 */
export const stripHtml = (string: string) => {
	return string.replace(/<[^>]*>?/gm, "")
}

/**
 * Convert newlines to specified element
 * @param string - string to convert
 * @param replacement - replacement to convert newlines to
 * @returns string with newlines converted to specified element
 */
export const convertNewlines = (string: string, replacement = " ") => {
	return string.replace(/\n+/g, replacement)
}

/**
 * Get an excerpt from a string
 * @param content - The string to get an excerpt from
 * @param length - The length of the excerpt
 * @returns An excerpt from the string
 */
export const getExcerpt = (content: string | undefined | null, length = 250) => {
	if (!content) {
		return null
	}

	const plainText = convertNewlines(stripHtml(content))
	const text = plainText.slice(0, length).trim()

	if (text.length < plainText.length) {
		return `${text}...`
	}

	return text
}

/**
 * Check if a given string is a valid cuid
 * @param id A string to check
 * @returns A boolean indicating if the string is a cuid
 */
export const isCuid = (id: string) => {
	return id.length === 25 && id[0] === "c"
}

/**
 * Check if a value is truthy
 * @param value - The value to check
 * @returns A boolean indicating if the value is truthy
 */
export function isTruthy<T>(value?: T | undefined | null | false): value is T {
	return !!value
}

/**
 * Get the initials from a string
 * @param value A string to get the initials from
 * @param limit The maximum number of initials to return
 * @returns The initials from the string
 */
export const getInitials = (value?: string | null, limit = 0) => {
	if (!value) {
		return ""
	}

	const values = value.trim().split(" ").filter(isTruthy)
	const initials = values.map((name) => name.charAt(0).toUpperCase()).join("")

	if (limit > 0) {
		return initials.slice(0, limit)
	}

	return initials
}
