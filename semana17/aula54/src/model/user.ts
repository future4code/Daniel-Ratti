export enum USER_ROLES {
  NORMAL = "NORMAL",
  ADMIN = "ADMIN",
}

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  role: USER_ROLES;
};

export type authenticationData = {
  id: string;
  role: USER_ROLES;
};

export type loginInput = {
  email: string;
  password: string;
};
