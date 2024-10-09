import type { BaseHttpResponse } from "#/shared/utils/httpClient";

export namespace ConfigurationsApiDto {
  export type StopsByAccountIdResponse = BaseHttpResponse<Stop[]>;
  export type RoutesByAccountIdResponse = BaseHttpResponse<Route[]>;

  export interface Stop {
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

  export interface Route {
    id: number;
    account_id: number;
    route_name: string;
    route_code: string;
    route_start_id: number;
    route_start: Stop;
    route_end_id: number;
    route_end: Stop;
    route_distance: number;
    route_direction: number;
    route_color: string;
    status: number;
    created_by: number;
    updated_by: number;
    created_at: Date;
    updated_at: Date;
    id_alert: number;
    route_stops: RouteStop[];
    route_vehicles: RouteVehicle[];
    route_points: RoutePoint[];
  }

  export interface RoutePoint {
    id: number;
    route_id: number;
    lat: number;
    lng: number;
  }

  export interface RouteStop {
    stop_id: number;
    route_id: number;
    sequence: number;
    eta: number;
    stop_duration: number;
    distance: number;
    bound: Bound;
    stop: Stop;
  }

  export type Bound = "inbound" | "outbound";

  export interface RouteVehicle {
    vehicle_id: number;
    route_id: number;
  }
}
