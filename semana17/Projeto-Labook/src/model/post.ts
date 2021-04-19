export enum POST_TYPES {
  NORMAL = "normal",
  EVENT = "event",
}

export type Post = {
  id: string;
  photo: string;
  description: string;
  type: POST_TYPES;
  created_at: string;
  author_id: string;
};

export type postInputDTO = {
  token: string;
  photo: string;
  description: string;
  type: string;
};
