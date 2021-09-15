import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import City from 'App/Models/City'

export default class CitySeeder extends BaseSeeder {
  public async run () {
    await City.createMany([
      {
        name: "Bangalore",
        state: "Karnataka",
        tourist_spots: 16,
        distance_from_capital: 2175.3
      },
      {
        name: "Jaipur",
        state: "Rajasthan",
        tourist_spots: 12,
        distance_from_capital: 278.6
      },
      {
        name: "Varanasi",
        state: "Uttar Pradesh",
        tourist_spots: 38,
        distance_from_capital: 862
      },
      {
        name: "Kolkata",
        state: "West Bengal",
        tourist_spots: 22,
        distance_from_capital: 1535
      },
      {
        name: "Agra",
        state: "Uttar Pradesh",
        tourist_spots: 17,
        distance_from_capital: 202.5
      },
      {
        name: "Shillong",
        state: "Meghalaya",
        tourist_spots: 31,
        distance_from_capital: 2004.6
      }
    ])
  }
}
