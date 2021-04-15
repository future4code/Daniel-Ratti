import { USER_ROLES } from "../types/user";

export type AuthenticationData = {
  id: string;
  role: USER_ROLES;
};
