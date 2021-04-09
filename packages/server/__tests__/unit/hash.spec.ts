import { HashProvider } from '../../src/providers/hash';

let password: string;
let hashedPassword: string;

describe('Hash Provider', () => {
  beforeAll(async () => {
    password = 'm3N5&U';
    hashedPassword = await HashProvider.generateHash(password);
  });

  it('should be possible to hash your password', async () => {
    expect(password.length).toBeLessThan(hashedPassword.length);
  });

  it('should be possible compare your password', async () => {
    const isSamePassword = HashProvider.compareHash(password, hashedPassword);
    expect(isSamePassword).toBeTruthy();
  });
});
