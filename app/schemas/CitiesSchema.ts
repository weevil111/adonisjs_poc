import {schema, rules} from "@ioc:Adonis/Core/Validator"

export const createSchema = schema.create({
  name: schema.string({trim: true}),
  state: schema.string({trim: true},[
    rules.minLength(2),
    rules.maxLength(20)
  ]),
  tourist_spots: schema.number([
    rules.range(0,100)
  ]),
  distance_from_capital: schema.number([
    rules.range(0,3000)
  ])
})

export const updateSchema = schema.create({
  name: schema.string.optional({trim: true}),
  state: schema.string.optional({trim: true},[
    rules.minLength(2),
    rules.maxLength(20)
  ]),
  tourist_spots: schema.number.optional([
    rules.range(0,100)
  ]),
  distance_from_capital: schema.number.optional([
    rules.range(0,3000)
  ])
})