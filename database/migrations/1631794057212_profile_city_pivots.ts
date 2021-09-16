import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ProfileCityPivots extends BaseSchema {
  protected tableName = 'profile_city_pivots'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary();
      table.integer("profile_id").unsigned().notNullable().references("profiles.id");
      table.integer("city_id").unsigned().notNullable().references("cities.id");
      table.unique(["profile_id", "city_id"]);
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
