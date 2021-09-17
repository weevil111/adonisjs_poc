import {schema, rules} from "@ioc:Adonis/Core/Validator"

export const createSchema = schema.create({
  name: schema.string({trim: true}, [
    rules.minLength(3),
    rules.maxLength(50)
  ]),
  age: schema.number([
    rules.range(0,130)
  ]),
  gender: schema.enum(["male", "female", "other"])
})

export const updateSchema = schema.create({
  name: schema.string.optional({trim: true}, [
    rules.minLength(3),
    rules.maxLength(50)
  ]),
  age: schema.number.optional([
    rules.range(0,130)
  ]),
  gender: schema.enum.optional(["male", "female", "other"])
})

export const wishlistSchema = schema.create({
  cityId: schema.number()
})