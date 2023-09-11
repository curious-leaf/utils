/**
 * Utility functions related to time.
 */

type FormatStyles = "full" | "long" | "medium" | "short"

/**
 * Formats a date according to the specified options.
 * @param timestamp - The timestamp to format.
 * @param dateStyle - The date formatting style to use. Defaults to 'medium'.
 * @param locale - The locale to use for formatting. Defaults to 'en'.
 * @returns The formatted date string.
 */
export const formatDate = (
	timestamp: string | number | Date,
	dateStyle: FormatStyles = "medium",
	locale = "en-US",
) => {
	return new Date(timestamp).toLocaleString(locale, { dateStyle })
}

/**
 * Formats a time according to the specified options.
 * @param timestamp - The timestamp to format.
 * @param timeStyle - The time formatting style to use. Defaults to 'short'.
 * @param locale - The locale to use for formatting. Defaults to 'en'.
 * @returns The formatted time string.
 */
export const formatTime = (
	timestamp: string | number | Date,
	timeStyle: FormatStyles = "short",
	locale = "en-US",
) => {
	return new Date(timestamp).toLocaleString(locale, { timeStyle })
}

/**
 * Formats a date and time according to the specified options.
 * @param timestamp - The timestamp to format.
 * @param dateStyle - The date formatting style to use. Defaults to 'medium'.
 * @param timeStyle - The time formatting style to use. Defaults to 'short'.
 * @param locale - The locale to use for formatting. Defaults to 'en'.
 * @returns The formatted date and time string.
 */
export const formatDateTime = (
	timestamp: string | number | Date,
	dateStyle: FormatStyles = "medium",
	timeStyle: FormatStyles = "short",
	locale = "en-US",
) => {
	return new Date(timestamp).toLocaleString(locale, { dateStyle, timeStyle })
}

/**
 * Formats a date or time according to the specified options.
 * @param timestamp - The timestamp to format.
 * @param type - The type of formatting to use. Can be 'date', 'time', or 'datetime'.
 * @param dateStyle - The date formatting style to use. Defaults to 'medium'.
 * @param timeStyle - The time formatting style to use. Defaults to 'short'.
 * @param locale - The locale to use for formatting. Defaults to 'en'.
 * @returns The formatted date or time string.
 */
export const formatDateOrTime = (
	timestamp: string | number | Date,
	type: "date" | "time" | "datetime",
	dateStyle: FormatStyles = "medium",
	timeStyle: FormatStyles = "short",
	locale = "en-US",
) => {
	switch (type) {
		case "date":
			return formatDate(timestamp, dateStyle, locale)
		case "time":
			return formatTime(timestamp, timeStyle, locale)
		default:
			return formatDateTime(timestamp, dateStyle, timeStyle, locale)
	}
}

/**
 * Calculates the estimated read time for a given content.
 * @param content - The content to calculate the read time for.
 * @param wpm - The average words per minute to use for the calculation. Defaults to 265.
 * @returns The estimated read time in minutes.
 */
export const getReadTime = (content: string | null, wpm = 265): number => {
	if (!content) {
		return 0
	}

	return Math.ceil(content.trim().split(/\s+/).length / wpm)
}
