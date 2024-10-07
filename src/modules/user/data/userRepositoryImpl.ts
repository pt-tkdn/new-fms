import { getAccounts, login } from "#/modules/user/data/api/userApi";
import type { UserRepository } from "#/modules/user/domain/userRepository";

const userRepositoryImpl = (): UserRepository => {
  return {
    login: (email, password) => {
      return login(email, password);
    },
    getAccounts: () => {
      return getAccounts();
    },
  };
};

export default userRepositoryImpl();
