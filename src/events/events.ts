/**
 * Utility functions for working with events.
 */

/**
 * Subscribes to a custom event.
 * @param eventName - The name of the event to subscribe to.
 * @param listener - The function to be called when the event is triggered.
 */
export const subscribe = (eventName: string, listener: EventListenerOrEventListenerObject) => {
  document.addEventListener(eventName, listener)
}

/**
 * Unsubscribes from a custom event.
 * @param eventName - The name of the event to unsubscribe from.
 * @param listener - The function to be removed from the event listeners.
 */
export const unsubscribe = (eventName: string, listener: EventListenerOrEventListenerObject) => {
  document.removeEventListener(eventName, listener)
}

/**
 * Publishes a custom event.
 * @param eventName - The name of the event to publish.
 * @param data - The data to be passed along with the event.
 */
export const publish = (eventName: string, data: unknown) => {
  const event = new CustomEvent(eventName, { detail: data })
  document.dispatchEvent(event)
}

/**
 * Publishes a keyboard event for the Escape key.
 */
export const publishEscape = () => {
  const event = new KeyboardEvent("keydown", { key: "Escape" })
  document.dispatchEvent(event)
}
