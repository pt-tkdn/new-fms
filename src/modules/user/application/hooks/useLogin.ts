import userRepositoryImpl from "#/modules/user/data/userRepositoryImpl";
import { User } from "#/modules/user/domain/entities/user";
import { BaseHttpError } from "#/shared/utils/httpClient";
import { useMutation } from "@tanstack/react-query";

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
