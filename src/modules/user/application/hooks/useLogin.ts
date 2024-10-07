import { useMutation } from "@tanstack/react-query";

import userRepositoryImpl from "#/modules/user/data/userRepositoryImpl";
import type { User } from "#/modules/user/domain/entities/user";
import type { BaseHttpError } from "#/shared/utils/httpClient";

export interface LoginParams {
  email: string;
  password: string;
}

export const useLogin = () => {
  const mutationInfo = useMutation<User, BaseHttpError, LoginParams>({
    mutationFn: async ({ email, password }) => {
      return userRepositoryImpl.login(email, password);
    },
  });

  return mutationInfo;
};
