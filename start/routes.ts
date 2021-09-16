import HealthCheck from '@ioc:Adonis/Core/HealthCheck'
import Route from '@ioc:Adonis/Core/Route'

Route.get("health", async function({response}){
  const report = await HealthCheck.getReport()
  return report.healthy? response.ok(report): response.badRequest(report)
})

// User routes
Route.post("/register", "UsersController.register");
Route.post("/login", "UsersController.login");
Route.post("/logout", "UsersController.logout");

// Cities routes
Route.get("/cities", "CitiesController.index");
Route.get("/cities/:id", "CitiesController.findById");
Route.post("/cities", "CitiesController.create");
Route.patch("/cities/:id", "CitiesController.update");
Route.delete("/cities/:id", "CitiesController.remove");