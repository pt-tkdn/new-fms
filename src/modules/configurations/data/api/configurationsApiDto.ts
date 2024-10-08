import type { BaseHttpResponse } from "#/shared/utils/httpClient";

export namespace ConfigurationsApiDto {
  export type StopsByAccountIdResponse = BaseHttpResponse<Stops[]>;

  export interface Stops {
    id: number;
    account_id: number;
    stop_name: string;
    stop_code: string;
    stop_address: string;
    lat: number;
    lng: number;
    radius: number;
    description: string;
    status: number;
    created_by: number;
    updated_by: number;
    id_geofence: number;
    created_at: Date;
    updated_at: Date;
    polygon: unknown[];
  }
}
