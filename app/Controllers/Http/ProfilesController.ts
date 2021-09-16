import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Profile from 'App/Models/Profile';

export default class ProfilesController {

  public async index({auth}: HttpContextContract){
    const userId = auth.user!.id;
    const profile = Profile.findByOrFail("user_id",userId);
    return profile;
  }

  public async create({request, auth}: HttpContextContract){
    const userProfieDetails = request.body();
    userProfieDetails.userId = auth.user?.id;
    const profile = await Profile.create(userProfieDetails);
    return profile;
  }

  public async update({request, auth}: HttpContextContract){
    const newProfileData = request.body();
    const profileDetails = await Profile.findByOrFail("user_id",auth.user?.id);
    profileDetails.merge(newProfileData);
    profileDetails.userId = auth.user!.id;
    return await profileDetails.save();
  }
  
}
