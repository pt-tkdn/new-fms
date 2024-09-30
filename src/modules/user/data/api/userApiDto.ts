import { BaseHttpResponse } from "#/shared/utils/httpClient";

export namespace UserDto {
  export type LoginResponse = BaseHttpResponse<Data>;

  export interface Data {
    token: string;
    user: User;
  }

  export interface User {
    id: number;
    name: string;
    email: string;
    phone: string;
    type: number;
    status: number;
    last_login: string;
    capabilities: Capability[];
    account: null;
  }

  export interface Capability {
    capability_id: number;
    capability: string;
    is_able: boolean;
  }
}
