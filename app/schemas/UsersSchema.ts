import {schema, rules} from "@ioc:Adonis/Core/Validator"

export const registerSchema = schema.create({
  email: schema.string({trim: true}, [
    rules.email()
  ]),
  password: schema.string({},[
    rules.confirmed()
  ])
})

export const loginSchema = schema.create({
  email: schema.string({trim: true}, [
    rules.email()
  ]),
  password: schema.string()
})