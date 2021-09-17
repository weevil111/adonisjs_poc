import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import City from "App/Models/City";
import { createSchema, updateSchema } from 'App/schemas/CitiesSchema';

export default class CitiesController {

  public async index() {
    const cities = await City.all();
    return cities;
  }

  public async findById({ params }) {
    const city = await City.findOrFail(params.id);
    return city;
  }

  public async create({ request }: HttpContextContract) {
    const newCity = await request.validate({ schema: createSchema });
    const city = await City.create(newCity);
    return city;
  }

  public async update({ params, request }: HttpContextContract) {
    const data = await request.validate({ schema: updateSchema });
    let city = await City.findOrFail(params.id);
    return await city
      .merge(data).save();
  }

  public async remove({ params }: HttpContextContract) {
    const city = await City.findOrFail(params.id);
    try {
      await city.delete();
      return "City deleted";
    } catch (err) {
      return err;
    }
  }

}
