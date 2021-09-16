import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Profiles extends BaseSchema {
  protected tableName = 'profiles'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary();
      table.integer("user_id").unsigned().notNullable().references("users.id")
      table.string("name").notNullable();
      table.integer("age").notNullable();
      table.enu("gender",["male","female","other"], {
        useNative: true,
        enumName: "user_gender",
        existingType: true
      }).notNullable();
      table.timestamp('created_at', { useTz: true });
      table.timestamp('updated_at', { useTz: true });
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
