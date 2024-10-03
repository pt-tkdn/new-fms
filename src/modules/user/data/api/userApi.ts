import { UserDto } from "#/modules/user/data/api/userApiDto";
import { mapUserResponseToEntity } from "#/modules/user/data/api/userMapper";
import httpClient from "#/shared/utils/httpClient";

export const login = async (email: string, password: string) => {
  const res = await httpClient.post<UserDto.LoginResponse>("/user/login", {
    email,
    password,
  });
  const user = mapUserResponseToEntity(res.data);
  return user;
};
