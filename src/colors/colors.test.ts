import { describe, expect, it } from "bun:test"

import { isLightColor } from "./colors"

describe("isLightColor", () => {
  it("should return true for a light color", () => {
    const hexa = "#FFFFFF"
    const result = isLightColor(hexa)
    expect(result).toBe(true)
  })

  it("should return false for a dark color", () => {
    const hexa = "#000000"
    const result = isLightColor(hexa)
    expect(result).toBe(false)
  })
})
