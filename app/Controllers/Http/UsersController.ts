import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User';

export default class UsersController {

  public async register({request}: HttpContextContract){
    const email = request.input("email");
    const password = request.input("password")
    const newUser = await User.create({email, password});
    return newUser;
  }
  
  public async login({request, auth}: HttpContextContract){
    const email = request.input("email");
    const password = request.input("password");
    const token = await auth.attempt(email, password);
    return token;
  }

  public async logout({auth} : HttpContextContract){
    try{
      await auth.logout();
      return "Logout successful"
    }catch(err){
      return err;
    }
  }
  
}
