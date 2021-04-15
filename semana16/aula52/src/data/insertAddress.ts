import connection from "../services/connection";
import { completeAddress } from "../types/adress";

export default async function insertAddress(address: completeAddress) {
  await connection
    .insert({
      id: address.id,
      street: address.street,
      number: address.number,
      neighborhood: address.neighborhood,
      complement: address.complement,
      city: address.city,
      state: address.state,
      user_id: address.user_id,
    })
    .into("USER_ADDRESS");
}
