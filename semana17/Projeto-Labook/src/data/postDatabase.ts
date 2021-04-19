import { BaseDatabase } from "./BaseDataBase";
import { Post } from "../model/post";

export class PostDatabase extends BaseDatabase {
  insertPost = async (post: Post) => {
    await BaseDatabase.connection
      .insert({
        id: post.id,
        photo: post.photo,
        description: post.description,
        type: post.type,
        created_at: post.created_at,
        author_id: post.author_id,
      })
      .into("labook_posts");
  };

  selectPostById = async (id: string) => {
    const result = await BaseDatabase.connection.raw(`
            SELECT * FROM ${"labook_posts"}
            WHERE id = "${id}";
        `);

    return result[0];
  };
}
