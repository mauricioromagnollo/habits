import { hash, compare } from 'bcryptjs';

export class HashProvider {
  public static async generateHash(payload: string): Promise<string> {
    return hash(payload, 8);
  }

  public static async compareHash(
    payload: string,
    hashed: string,
  ): Promise<boolean> {
    return compare(payload, hashed);
  }
}
