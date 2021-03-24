import connection from "../connection";

const createMovie = async (
  id: string,
  title: string,
  synopsis: string,
  releaseDate: Date,
  playingLimitDate: Date,
  rating: number
) => {
  await connection
    .insert({
      id: id,
      title: title,
      synopsis: synopsis,
      release_Date: releaseDate,
      playing_limit_date: playingLimitDate,
      rating: rating,
    })
    .into("Movie");
};

const getAllMovies = async (): Promise<any> => {
  const result = await connection.raw(`
      SELECT * FROM Movies LIMIT 15; 
    `);

  return result[0];
};

const searchMovies = async (text: string) => {
  try {
    const result = await connection.raw(`
        SELECT * FROM Movies
        WHERE (title LIKE "%${text}%" OR synopsis LIKE "%${text}%");
     `);
    return result[0];
  } catch (error) {
    throw new Error(error);
  }
};

export { createMovie, getAllMovies, searchMovies };
