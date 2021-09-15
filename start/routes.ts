import HealthCheck from '@ioc:Adonis/Core/HealthCheck'
import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.get("health", async function({response}){
  const report = await HealthCheck.getReport()
  return report.healthy? response.ok(report): response.badRequest(report)
})