import type { BaseHttpResponse } from "#/shared/utils/httpClient";

export namespace AssetsApiDto {
  export type GPSByAccountIDResponse = BaseHttpResponse<AccountResponse[]>;
  export type SIMCardByAccountIDResponse = BaseHttpResponse<SimCard[]>;
  export type VehicleByAccountIDResponse = BaseHttpResponse<Vehicle[]>;
  export type DriverByAccountIDResponse = BaseHttpResponse<DriverResponse[]>;

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

  export interface Vehicle {
    id: number;
    account_id: number;
    vehicle_no: string;
    vehicle_code: string;
    stnk_number: string | null;
    machine_no: string | null;
    chassis_no: string | null;
    capacity: string | null;
    status: number;
    total_seat: number;
    pic_url: string;
    type: string;
    color: string | null;
    manufacture: string | null;
    manufacture_year: string | null;
    odometer: number;
    stnk_date: string | null;
    keur_number: string | null;
    keur_date: string | null;
    kp_number: string | null;
    kp_date: string | null;
    sipa_number: string | null;
    sipa_date: string | null;
    ibm_number: string | null;
    ibm_date: string | null;
    other_number: string | null;
    other_number_date: string | null;
    created_by: number;
    updated_by: number;
    gps_id: number;
    gps: Gps;
    created_at: Date;
    updated_at: Date;
    account: Account;
  }

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
    account_officer: string;
    created_by: number;
    updated_by: number;
    parent_id: number;
    created_at: Date;
    updated_at: Date;
    user_id_gps_wox: number;
    token_gps_integrator: string | null;
    gps_integrator_interval: number;
    gps_integrator_minutes: number;
    parent: Account | null;
    vehicles: Vehicle | null;
  }

  export interface Gps {
    id: number;
    imei: string;
    serial_number: string;
    model: string;
    fuel_quantity: number | null;
    fuel_price: number | null;
    created_by: number;
    updated_by: number;
    account_id: number;
    id_gps: number;
    sim_card_id: number;
    created_at: Date;
    updated_at: Date;
    account: null;
    sim_card: SimCard;
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

  export interface DriverResponse {
    id: number;
    account_id: number;
    name: string;
    driver_code: string;
    license_number: string;
    license_number_date: string;
    license_number_type: string;
    phone_number: string;
    gender: string;
    address: string;
    ktp_number: string;
    status: number;
    pic_url: string;
    created_by: number;
    updated_by: number;
    created_at: Date;
    updated_at: Date;
    ibutton_id: number;
    account: Account;
    ibutton: IButton;
  }

  export interface IButton {
    id: number;
    account_id: number;
    ibutton_no: string;
    status: number;
    created_by: number;
    updated_by: number;
    created_at: Date;
    updated_at: Date;
  }
}
