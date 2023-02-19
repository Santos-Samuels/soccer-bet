export interface IInputUser {
  name: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

export interface IInputUserLogin {
  email: string;
  password: string;
}
