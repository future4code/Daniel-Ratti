import { user, users } from "./../users/users";
export const today: number = new Date().getTime();

export const getTimestamp = (date: string): number => {
  const [day, month, year] = date.split("/");

  return new Date(`${year}-${month}-${day}`).getTime();
};

export const checkAge = (birthDate: string): boolean => {
  const birthDateTimestamp: number = getTimestamp(birthDate);

  const ageInMilli: number = (today - birthDateTimestamp) / 1000;

  const age: number = ageInMilli / (60 * 60 * 24 * 365);

  return age > 18;
};

export const findCpf = (cpf: string): user | undefined => {
  return users.find((account) => {
    return account.cpf === cpf;
  });
};
