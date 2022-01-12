import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { UpdateAvatarUserService } from '../services/UpdateAvatarUserService';

class UpdateAvatarUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const updateAvatarUserService = container.resolve(UpdateAvatarUserService);

    const user = await updateAvatarUserService.execute({
      user_id: request.user.id,
      avatarFileName: request.file?.filename,
    });

    return response.status(204).json(user);
  }
}

export { UpdateAvatarUserController };
