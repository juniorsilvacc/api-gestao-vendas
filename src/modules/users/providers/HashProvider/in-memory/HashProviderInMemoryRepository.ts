import { IHashProvider } from '../models/IHashProvider';

class HashProviderInMemoryRepository implements IHashProvider {
  async generateHash(payload: string): Promise<string> {
    return payload;
  }

  async compareHash(payload: string, hashed: string): Promise<boolean> {
    return payload === hashed;
  }
}

export { HashProviderInMemoryRepository };
