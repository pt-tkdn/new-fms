import type { BaseHttpResponse } from "#/shared/utils/httpClient";

export namespace ReportsApiDto {
  export type ReportsJourneyVehicleResponse = BaseHttpResponse<
    ReportsJourneyVehicle[]
  >;

  export interface ReportsJourneyVehicleRequest {
    vehicle_id: number;
    stops: string;
    from_date: string;
    from_time: string;
    to_date: string;
    to_time: string;
  }

  export interface ReportsJourneyVehicle {
    status: number;
    start: string;
    end: string;
    distance: string;
    top_speed: string;
    average_speed: string;
    stop_duration: string;
    drive_duration: string;
    duration: string;
    fuel_consumption_gps: string;
    fuel_price_gps: string;
    start_location: string;
    end_location: string;
  }
}
