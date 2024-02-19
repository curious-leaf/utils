import { describe, expect, it } from "bun:test"

import {
  formatBytes,
  formatCurrency,
  formatMimeType,
  formatPrice,
  formatToDecimals,
} from "./format"

describe("formatCurrency", () => {
  it("formats a number as currency", () => {
    expect(formatCurrency(1000)).toBe("$1,000")
    expect(formatCurrency(1000.5)).toBe("$1,000.50")
    expect(formatCurrency(1000, "EUR")).toBe("€1,000")
    expect(formatCurrency(1000.5, "EUR")).toBe("€1,000.50")
  })
})

describe("formatPrice", () => {
  it("formats a number as price", () => {
    expect(formatPrice(1000)).toBe("$1,000")
    expect(formatPrice(1000, true)).toBe("$83.33")
    expect(formatPrice(1000, false, "EUR")).toBe("€1,000")
    expect(formatPrice(1000, true, "EUR")).toBe("€83.33")
  })
})

describe("formatToDecimals", () => {
  it("formats a number to the specified number of decimals", () => {
    expect(formatToDecimals(1234.5678, 2)).toEqual("1234.57")
    expect(formatToDecimals(1234.5678, 0)).toEqual("1235")
    expect(formatToDecimals(1234.5678, 4)).toEqual("1234.5678")
  })

  it("handles negative decimal values", () => {
    expect(formatToDecimals(1234.5678, -1)).toEqual("1235")
  })
})

describe("formatBytes", () => {
  it("formats bytes correctly", () => {
    expect(formatBytes(0)).toEqual("0 Bytes")
    expect(formatBytes(1024)).toEqual("1 KB")
    expect(formatBytes(1048576)).toEqual("1 MB")
    expect(formatBytes(1073741824)).toEqual("1 GB")
    expect(formatBytes(1099511627776)).toEqual("1 TB")
  })

  it("formats bytes with decimals correctly", () => {
    expect(formatBytes(1024, 1)).toEqual("1.0 KB")
    expect(formatBytes(1048576, 2)).toEqual("1.00 MB")
    expect(formatBytes(1073741824, 3)).toEqual("1.000 GB")
    expect(formatBytes(1099511627776, 4)).toEqual("1.0000 TB")
  })
})

describe("formatMimeType", () => {
  it("formats a MIME type string", () => {
    expect(formatMimeType("image/png")).toBe("PNG")
    expect(formatMimeType("application/json")).toBe("JSON")
    expect(formatMimeType("text/*")).toBeUndefined()
  })
})
