import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import City from 'App/Models/City';
import Profile from 'App/Models/Profile';
import { createSchema, updateSchema, wishlistSchema } from 'App/schemas/ProfilesSchema';

export default class ProfilesController {

  public async index({ auth }: HttpContextContract) {
    const userId = auth.user!.id;
    const profile = await Profile.query().where("id", userId).preload("cities").first();
    return profile;
  }

  public async create({ request, auth }: HttpContextContract) {
    // Check if the profile already exists. If so, then return it instead of creating a new one.
    const oldProfile = await Profile.find(auth.user!.id);
    if (oldProfile) {
      return oldProfile;
    }
    const userProfieDetails = await request.validate({ schema: createSchema });
    const profile = await Profile.create({ ...userProfieDetails, userId: auth.user!.id });
    return profile;
  }

  public async update({ request, auth }: HttpContextContract) {
    const newProfileData = await request.validate({ schema: updateSchema });
    const profileDetails = await Profile.findByOrFail("user_id", auth.user?.id);
    profileDetails.merge(newProfileData);
    profileDetails.userId = auth.user!.id;
    return await profileDetails.save();
  }

  public async addToWishlist({ request, auth }: HttpContextContract) {
    const {cityId} = await request.validate({ schema: wishlistSchema });
    // Make sure the city exists
    const city = await City.findOrFail(cityId);
    const userProfile = await Profile.findByOrFail("user_id", auth.user?.id);
    try {
      await userProfile.related("cities").attach([city.id])
      return "Added to wishlist";
    } catch (err) {
      return err;
    }
  }

  public async removeFromWishlist({ request, auth }: HttpContextContract) {
    const {cityId} = await request.validate({ schema: wishlistSchema });
    // Make sure the city exists
    const city = await City.findOrFail(cityId);
    const userProfile = await Profile.findByOrFail("user_id", auth.user?.id);
    try {
      await userProfile.related("cities").detach([city.id])
      return "Removed from wishlist";
    } catch (err) {
      return err;
    }
  }

}
