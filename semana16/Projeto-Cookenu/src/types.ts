export type user = {
  id: string;
  name: string;
  email: string;
  password: string;
  role: USER_ROLE;
};
export enum USER_ROLE {
  NORMAL = "NORMAL",
  ADMIN = "ADMIN",
}

export type recipe = {
  id: string;
  title: string;
  description: string;
  created_at: string;
  creator_id: string;
};

export type follower = {
  follower_id: string;
  following_id: string;
};
