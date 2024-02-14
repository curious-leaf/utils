/**
 * Utility functions for formatting data.
 */

type Currency = Intl.NumberFormatOptions["currency"]

/**
 * Formats a given amount of money into a currency string.
 * @param amount The amount of money to format.
 * @param currency The currency to format the amount in. Defaults to 'USD'.
 * @returns The formatted currency string.
 */
export const formatCurrency = (amount: number, currency: Currency = "USD") => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  })

  return formatter.format(amount).replace(/\D00(?=\D*$)/, "")
}

/**
 * Formats a given amount with an interval to a currency string.
 * @param amount The amount of money to format.
 * @param interval The interval, either 'month' or 'year'. Defaults to 'month'.
 * @param currency The currency to format the amount in. Defaults to 'USD'.
 * @returns The formatted currency string per interval.
 */
export const formatAmount = (
  amount: number,
  interval: "month" | "year" = "month",
  currency: Currency = "USD",
) => {
  return formatCurrency(amount / (interval === "year" ? 12 : 1), currency)
}

/**
 * Formats a given price into a currency string.
 * @param amount The amount of money to format.
 * @param annual Whether the price is an annual price. Defaults to false.
 * @param currency The currency to format the price in. Defaults to 'USD'.
 * @returns The formatted price string.
 */
export const formatPrice = (amount: number, annual?: boolean, currency?: Currency) => {
  return formatCurrency(amount / (annual ? 12 : 1), currency)
}

/**
 * Formats a number to a specified number of decimal places.
 * @param number - The number to format.
 * @param decimals - The number of decimal places to format to.
 * @returns The formatted number as a string.
 */
export const formatToDecimals = (number: number, decimals = 0): string => {
  const dm = decimals < 0 ? 0 : decimals

  return parseFloat(number.toString()).toFixed(dm)
}

/**
 * Formats a number of bytes to a human-readable string.
 * @param bytes - The number of bytes to format.
 * @param decimals - The number of decimal places to format the size to.
 * @returns The formatted size as a string.
 */
export const formatBytes = (bytes: number, decimals = 0): string => {
  if (bytes === 0) {
    return "0 Bytes"
  }

  const k = 1024
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  const size = formatToDecimals(bytes / k ** i, decimals)
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]

  return `${size} ${sizes[i]}`
}

/**
 * Formats a MIME type string to a more readable format.
 * @param mimeType - The MIME type string to format.
 * @returns The formatted MIME type string.
 */
export const formatMimeType = (mimeType: string): string | undefined => {
  const [, subtype] = mimeType.split("/")
  let type: string | undefined

  switch (subtype) {
    case "*":
      return undefined
    default:
      type = subtype
  }

  return type?.toUpperCase()
}
