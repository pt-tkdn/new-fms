import { login } from "#/modules/user/data/api/userApi";
import { UserRepository } from "#/modules/user/domain/userRepository";

const userRepositoryImpl = (): UserRepository => {
  return {
    login: (email, password) => {
      return login(email, password);
    },
  };
};

export default userRepositoryImpl();