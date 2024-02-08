/// <reference lib="dom" />

import { describe } from "bun:test"

describe("Events utility functions", () => {
  // describe("subscribe", () => {
  // 	it("adds a listener to the specified event", () => {
  // 		const listener = mock(() => Math.random())
  // 		subscribe(eventName, listener)
  // 		const event = new CustomEvent(eventName)
  // 		document.dispatchEvent(event)
  // 		expect(listener).toHaveBeenCalledTimes(1)
  // 	})
  // })
  // describe("unsubscribe", () => {
  // 	it("removes a listener from the specified event", () => {
  // 		const listener = mock(() => Math.random())
  // 		subscribe(eventName, listener)
  // 		unsubscribe(eventName, listener)
  // 		const event = new CustomEvent(eventName)
  // 		document.dispatchEvent(event)
  // 		expect(listener).not.toHaveBeenCalled()
  // 	})
  // })
  // describe("publish", () => {
  // 	it("dispatches a custom event with the specified name and data", () => {
  // 		const data = { foo: "bar" }
  // 		const listener = mock(() => Math.random())
  // 		document.addEventListener(eventName, listener)
  // 		publish(eventName, data)
  // 		expect(listener).toHaveBeenCalledTimes(1)
  // 		// expect(listener).toHaveBeenCalledWith(expect.objectContaining({ detail: data }))
  // 	})
  // })
  // describe("publishEscape", () => {
  // 	it("dispatches a keyboard event for the Escape key", () => {
  // 		const listener = mock(() => Math.random())
  // 		document.addEventListener("keydown", listener)
  // 		publishEscape()
  // 		expect(listener).toHaveBeenCalledTimes(1)
  // 		// expect(listener).toHaveBeenCalledWith(expect.objectContaining({ key: "Escape" }))
  // 	})
  // })
})
