import { isEmptyObject, sortObject, sortObjectKeys } from "./objects"
import { describe, expect, it } from "bun:test"

describe("isEmptyObject", () => {
  it("returns true for an empty object", () => {
    expect(isEmptyObject({})).toBe(true)
  })

  it("returns true for an object with no properties", () => {
    expect(isEmptyObject()).toBe(true)
  })

  it("returns false for an object with properties", () => {
    expect(isEmptyObject({ a: 1 })).toBe(false)
  })
})

describe("sortObjectKeys", () => {
	const comparator = sortObjectKeys(["a", "b", "c"])

	it("returns 0 when both objects are not in the keys array", () => {
		const a = { d: 1 }
		const b = { e: 2 }
		expect(comparator(a, b)).toBe(0)
	})

	it("returns 1 when only the first object is not in the keys array", () => {
		const a = { d: 1 }
		const b = { a: 2 }
		expect(comparator(a, b)).toBe(1)
	})

	it("returns -1 when only the second object is not in the keys array", () => {
		const a = { b: 1 }
		const b = { d: 2 }
		expect(comparator(a, b)).toBe(-1)
	})

	it("returns a negative number when the first object is before the second object in the keys array", () => {
		const a = { b: 1 }
		const b = { c: 2 }
		expect(comparator(a, b)).toBeLessThan(0)
	})

	it("returns a positive number when the first object is after the second object in the keys array", () => {
		const a = { c: 1 }
		const b = { b: 2 }
		expect(comparator(a, b)).toBeGreaterThan(0)
	})

	it("returns 0 when both objects are in the same position in the keys array", () => {
		const a = { b: 1 }
		const b = { b: 2 }
		expect(comparator(a, b)).toBe(0)
	})
})

describe("sortObject", () => {
	it("sorts the keys of an object in alphabetical order", () => {
		const obj = { b: 2, a: 1, c: 3 }
		const sortedObj = sortObject(obj)

		expect(sortedObj).toEqual({ a: 1, b: 2, c: 3 })
	})

	it("sorts the keys of an object using a custom comparator function", () => {
		const obj = { b: 2, a: 1, c: 3 }
		const comparator = sortObjectKeys(["c", "b", "a"]) as (a: unknown, b: unknown) => number
		const sortedObj = sortObject(obj, comparator)

		expect(sortedObj).toEqual({ c: 3, b: 2, a: 1 })
	})
})
