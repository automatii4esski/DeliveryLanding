export interface UserType {
  id: number;
  nickname: string;
  password: string;
}

export interface RegisterFormElementsType extends HTMLFormControlsCollection {
  nickname: HTMLInputElement;
  password: HTMLInputElement;
  'confirm-password': HTMLInputElement;
}
