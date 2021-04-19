import { UserDatabase } from "../data/userDatabase";
import { signupInputDTO, User } from "../model/user";
import { CustomError } from "../errors/CustomError";
import { generateToken } from "../services/authenticator";
import { HashManager } from "../services/hashManager";
import { generateId } from "../services/idGenerator";

const hashManager: HashManager = new HashManager();
const userDatabase: UserDatabase = new UserDatabase();

export class UserBusiness {
  businessSignup = async (input: signupInputDTO) => {
    if (!input.name) {
      throw new CustomError(400, "Please fill in a name.");
    }

    if (!input.email || input.email.indexOf("@") === -1) {
      throw new CustomError(400, "Invalid email format!");
    }

    if (!input.password || input.password.length < 6) {
      throw new CustomError(
        400,
        "The password must contain more than six digits."
      );
    }

    const id: string = generateId();

    const hashPassword = await hashManager.hash(input.password);

    const newUser: User = {
      id,
      name: input.name,
      email: input.email,
      password: hashPassword,
    };

    await userDatabase.insertUser(newUser);

    const token = generateToken({ id });

    return token;
  };

  businessLogin = async (input: any) => {
    if (!input.email || input.email.indexOf("@") === -1) {
      throw new CustomError(400, "Invalid email format!");
    }

    const user = await userDatabase.selectUserByLogin(input.email);

    if (!user) {
      throw new CustomError(400, "User not found!");
    }

    if (!input.password || input.password.length < 6) {
      throw new CustomError(
        400,
        "The password must contain more than six digits."
      );
    }

    const passwordIsCorrect: boolean = await hashManager.compare(
      input.password,
      user.password
    );

    if (!passwordIsCorrect) {
      throw new CustomError(400, "Incorrect password!");
    }

    const token = generateToken({
      id: user.id,
    });

    return token;
  };
}
