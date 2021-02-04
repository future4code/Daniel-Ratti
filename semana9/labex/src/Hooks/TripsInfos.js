import { useState, useEffect } from "react";
import axios from "axios";

export const useTrips = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/daniel-ratti-epps/trips"
      )
      .then((response) => {
        setList(response.data.trips);
      })
      .catch((error) => alert("Erro", error));
      console.log()
  }, [setList]);

  return list;
};