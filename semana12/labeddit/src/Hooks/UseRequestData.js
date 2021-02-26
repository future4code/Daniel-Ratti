import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../Constants/BaseUrl";

const useRequestData = (urlEnd, token) => {
  const [data, setData] = useState({});

  const getData = () => {
    axios
      .get(`${BASE_URL}/${urlEnd}`, { headers: { Authorization: token } })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(`Erro na requisição em ${urlEnd}`);
        console.log(error.message);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return [data, getData];
};

export default useRequestData;
