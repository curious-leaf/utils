export type WithOptional<Type, Key extends keyof Type> = Pick<Partial<Type>, Key> & Omit<Type, Key>

export type WithRequired<Type, Key extends keyof Type> = Type & {
  [Prop in Key]-?: Type[Prop]
}

export type ArrayElement<ArrayType extends readonly unknown[]> =
  ArrayType extends readonly (infer ElementType)[] ? ElementType : never

export * from "./src/colors/colors"
export * from "./src/errors/errors"
export * from "./src/events/events"
export * from "./src/format/format"
export * from "./src/helpers/helpers"
export * from "./src/http/http"
export * from "./src/numbers/numbers"
export * from "./src/objects/objects"
export * from "./src/params/params"
export * from "./src/parsers/parsers"
export * from "./src/random/random"
export * from "./src/time/time"
