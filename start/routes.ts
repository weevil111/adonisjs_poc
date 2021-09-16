// import HealthCheck from '@ioc:Adonis/Core/HealthCheck'
import Route from '@ioc:Adonis/Core/Route'

// Route.get("health", async function({response}){
//   const report = await HealthCheck.getReport()
//   return report.healthy? response.ok(report): response.badRequest(report)
// })

// User authenticaton routes
Route.post("/register", "UsersController.register");
Route.post("/login", "UsersController.login");
Route.post("/logout", "UsersController.logout").middleware("auth");

// User data routes
Route.group(() => {
  Route.get("/profile", "ProfilesController.index");
  Route.post("/profile", "ProfilesController.create");
  Route.patch("/profile", "ProfilesController.update");
  Route.post("/wishlist", "ProfilesController.addToWishlist");
  Route.delete("/wishlist", "ProfilesController.removeFromWishlist");
}).middleware("auth");

// Cities routes
Route.get("/cities", "CitiesController.index");
Route.get("/cities/:id", "CitiesController.findById");

Route.group(() => {
  Route.post("/cities", "CitiesController.create");
  Route.patch("/cities/:id", "CitiesController.update");
  Route.delete("/cities/:id", "CitiesController.remove");
}).middleware("auth")