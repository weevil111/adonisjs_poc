import { DateTime } from 'luxon'
import { BaseModel, column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Profile from './Profile'

export default class City extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: String

  @column()
  public state: String
  
  @column()
  public tourist_spots: Number
  
  @column()
  public distance_from_capital: Number
  
  
  @column.dateTime({ autoCreate: true, serializeAs: null })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, serializeAs: null })
  public updatedAt: DateTime

  @manyToMany(() => Profile, {
    pivotTable: "profile_city_pivots"
  })
  public profiles: ManyToMany<typeof Profile>
  
}
