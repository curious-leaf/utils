import { describe, expect, it } from "bun:test"

import { addHttp, isExternalLink, removeHttp, removeTrailingSlash } from "./http"

describe("addHttp", () => {
  it("adds https protocol to url", () => {
    const url = "example.com"
    const expected = "https://example.com"
    const result = addHttp(url)
    expect(result).toEqual(expected)
  })

  it("adds http protocol to localhost url", () => {
    const url = "localhost:3000"
    const expected = "http://localhost:3000"
    const result = addHttp(url)
    expect(result).toEqual(expected)
  })

  it("returns empty string if url is undefined", () => {
    const url = undefined
    const expected = ""
    const result = addHttp(url)
    expect(result).toEqual(expected)
  })
})

describe("removeHttp", () => {
  it("removes https protocol from url", () => {
    const url = "https://example.com"
    const expected = "example.com"
    const result = removeHttp(url)
    expect(result).toEqual(expected)
  })

  it("removes http protocol from url", () => {
    const url = "http://localhost:3000"
    const expected = "localhost:3000"
    const result = removeHttp(url)
    expect(result).toEqual(expected)
  })

  it("returns empty string if url is undefined", () => {
    const url = undefined
    const expected = ""
    const result = removeHttp(url)
    expect(result).toEqual(expected)
  })
})

describe("removeTrailingSlash", () => {
  it("removes trailing slash from URL", () => {
    const url = "https://example.com/"
    const expected = "https://example.com"
    const actual = removeTrailingSlash(url)
    expect(actual).toEqual(expected)
  })
})

describe("isExternalLink", () => {
  it("returns true for url with http protocol", () => {
    const url = "http://example.com"
    expect(isExternalLink(url)).toBe(true)
  })

  it("returns true for url with https protocol", () => {
    const url = "https://example.com"
    expect(isExternalLink(url)).toBe(true)
  })

  it("returns false for url without protocol", () => {
    const url = "example.com"
    expect(isExternalLink(url)).toBe(false)
  })

  it("returns false for empty input", () => {
    expect(isExternalLink()).toBe(false)
  })
})
