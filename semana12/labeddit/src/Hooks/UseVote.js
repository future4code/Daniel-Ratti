import axios from "axios";
import { BASE_URL } from "../Constants/BaseUrl";

const useVote = (endUrl, token) => {
  const vote = (direction, updateFunction) => {
    axios
      .put(
        `${BASE_URL}/posts/${endUrl}`,
        { direction: direction },
        { headers: { Authorization: token } }
      )
      .then(() => {
        updateFunction();
      })
      .catch((error) => {
        console.log(`Erro ao votar em ${endUrl}`);
        console.log(error.message);
      });
  };

  return vote;
};

export default useVote;
