import { describe, expect, it } from "bun:test"

import { getColorObject, isLightColor } from "./colors"

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

describe("getColorObject", () => {
  it("should return the correct color result for a valid hex string", () => {
    const hexa = "#FF0000"
    const result = getColorObject(hexa)

    expect(result).toEqual({
      rgb: { r: 255, g: 0, b: 0 },
      hsl: { h: 0, s: 100, l: 50 },
      hsv: { h: 0, s: 100, v: 100 },
      rgba: { r: 255, g: 0, b: 0, a: 1 },
      hsla: { h: 0, s: 100, l: 50, a: 1 },
      hsva: { h: 0, s: 100, v: 100, a: 1 },
      hex: "#ff0000",
      hexa: "#ff0000ff",
    })
  })

  it("should return the correct color result for a HsvaColor object", () => {
    const hsva = { h: 0, s: 100, v: 100, a: 1 }
    const result = getColorObject(hsva)

    expect(result).toEqual({
      rgb: { r: 255, g: 0, b: 0 },
      hsl: { h: 0, s: 100, l: 50 },
      hsv: { h: 0, s: 100, v: 100 },
      rgba: { r: 255, g: 0, b: 0, a: 1 },
      hsla: { h: 0, s: 100, l: 50, a: 1 },
      hsva: { h: 0, s: 100, v: 100, a: 1 },
      hex: "#ff0000",
      hexa: "#ff0000ff",
    })
  })
})
