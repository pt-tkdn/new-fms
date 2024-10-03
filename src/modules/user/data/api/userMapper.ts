import { UserDto } from "#/modules/user/data/api/userApiDto";
import { createUser, User } from "#/modules/user/domain/entities/user";

export const mapUserResponseToEntity = (res: UserDto.LoginResponse): User => {
  return createUser({
    capabilities: res.data.user.capabilities.map((capability) => {
      return {
        capabilityId: capability.capability_id,
        capability: capability.capability,
        isAble: capability.is_able,
      };
    }),
    email: res.data.user.email,
    accessToken: res.data.token,
    id: res.data.user.id,
    lastLogin: res.data.user.last_login,
    name: res.data.user.name,
    phone: res.data.user.phone,
    status: res.data.user.status,
    type: res.data.user.type,
    account: null,
  });
};
