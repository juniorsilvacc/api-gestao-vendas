import { AppError } from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { UsersRepository } from '../typeorm/repositories/UsersRepository';
import { UserTokensRepository } from '../typeorm/repositories/UserTokensRepository';

import { EtherealMail } from '@config/mail/EtherealMail';

interface IRequest {
  email: string;
}

class SendForgotPasswordService {
  async execute({ email }: IRequest): Promise<void> {
    const usersRepository = getCustomRepository(UsersRepository);
    const userTokensRepository = getCustomRepository(UserTokensRepository);

    const user = await usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError('User does not exists.', 404);
    }

    const { token } = await userTokensRepository.generateToken(user.id);

    await EtherealMail.sendMail({
      to: {
        name: user.email,
        email: user.email,
      },
      subject: '[API Vendas] Recuperação de senha',
      templateData: {
        template: `Olá, {{name}}. Sua solicitação de redefinição de senha foi enviada, use seu token {{token}}.`,
        variables: {
          name: user.name,
          token,
        },
      },
    });
  }
}

export { SendForgotPasswordService };
