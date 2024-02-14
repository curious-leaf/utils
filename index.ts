export type WithOptional<Type, Key extends keyof Type> = Pick<Partial<Type>, Key> & Omit<Type, Key>

export type WithRequired<Type, Key extends keyof Type> = Type & {
  [Prop in Key]-?: Type[Prop]
}

export type ArrayElement<ArrayType extends readonly unknown[]> =
  ArrayType extends readonly (infer ElementType)[] ? ElementType : never

export type DeepIdx<T, K extends string> = K extends ""
  ? T
  : K extends keyof T
    ? T[K]
    : K extends `${infer K0}.${infer KR}`
      ? K0 extends keyof T
        ? DeepIdx<T[K0], KR>
        : never
      : never

export type ValidatePath<T, K extends string> = K extends ""
  ? ""
  : K extends keyof T
    ? K
    : K extends `${infer K0}.${infer KR}`
      ? K0 extends keyof T
        ? `${K0}.${ValidatePath<T[K0], KR>}`
        : Extract<keyof T, string>
      : Extract<keyof T, string>

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
