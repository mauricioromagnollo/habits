import { uuid } from 'uuidv4';

export class User {
  private readonly _id: string;
  private _name: string;
  private _login: string;
  private _password: string;

  constructor(props: Omit<User, 'id'>, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this._id = uuid();
    }
  }

  get name(): string {
    return this._name;
  }

  get login(): string {
    return this._login;
  }

  get password(): string {
    return this._password;
  }
}
