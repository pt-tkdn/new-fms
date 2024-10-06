import { BaseHttpResponse } from "#/shared/utils/httpClient";

export namespace AssetsApiDto {
  export type GPSByAccountIDResponse = BaseHttpResponse<AccountResponse[]>;
  export type SIMCardByAccountIDResponse = BaseHttpResponse<SimCard[]>;

  export interface AccountResponse {
    id: number;
    imei: string;
    serial_number: string;
    model: string;
    fuel_quantity: null;
    fuel_price: null;
    created_by: number;
    updated_by: number;
    account_id: number;
    id_gps: number;
    sim_card_id: number | null;
    created_at: Date;
    updated_at: Date;
    account: null;
    sim_card: SimCard | null;
    sensors: null;
  }

  export interface SimCard {
    id: number;
    account_id: number;
    gsm_no: string;
    operator: string;
    msidn: string;
    imsi: string;
    status: number;
    created_by: number;
    updated_by: number;
    created_at: Date;
    updated_at: Date;
  }
}
