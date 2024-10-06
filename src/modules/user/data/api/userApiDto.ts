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

  export type AccountResponse = BaseHttpResponse<Account[]>;
  export interface Account {
    id: number;
    account_name: string;
    account_code: string;
    contact_person: string;
    contact_phone: string;
    status: number;
    type: number;
    pic_url: string;
    address: string;
    email: string;
    user_api_hash: string;
    account_officer: string | null;
    created_by: number;
    updated_by: number;
    parent_id: number | null;
    created_at: string;
    updated_at: string;
    user_id_gps_wox: number;
    token_gps_integrator: null | string;
    gps_integrator_interval: number;
    gps_integrator_minutes: number;
    parent: Account | null;
    vehicles: null;
  }
}
