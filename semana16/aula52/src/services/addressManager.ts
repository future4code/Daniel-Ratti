import { BASE_URL } from "./urls";
import axios from "axios";
import { address } from "../types/adress";

export async function fillAddressByCep(cep: string): Promise<address> {
  try {
    const result = await axios.get(`${BASE_URL}/${cep}/json`);

    const filledAdress: address = {
      street: result.data.street,
      neighborhood: result.data.neighborhood,
      city: result.data.city,
      state: result.data.state,
    };

    return filledAdress;
  } catch (error) {
    throw new Error(error.message);
  }
}
