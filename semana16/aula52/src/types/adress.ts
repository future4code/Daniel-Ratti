export type address = {
  street: string;
  neighborhood: string;
  number?: string;
  complement?: string;
  city: string;
  state: string;
};

export type completeAddress = {
  id: string;
  street: string;
  number: string;
  neighborhood: string;
  complement?: string;
  city: string;
  state: string;
  user_id: string;
};
