import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import City from "App/Models/City";

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
    const newCity = request.body();
    const city = await City.create(newCity);
    return city;
  }

  public async update({ params, request }: HttpContextContract) {
    const data = request.body();
    let city = await City.findOrFail(params.id);
    return await city
      .merge(data).save();
  }

  public async remove({params}: HttpContextContract){
    const city = await City.findOrFail(params.id);
    return city.delete();
  }

}
