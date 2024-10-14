import type { BaseHttpResponse } from "#/shared/utils/httpClient";

export namespace MonitoringApiDto {
  export type LiveMapsResponse = BaseHttpResponse<Vehicle[]>;
  export interface Vehicle {
    id: number;
    vehicle_no: string;
    vehicle_code: string;
    gps_position: GpsPosition;
  }

  export interface GpsPosition {
    id: number;
    time: string;
    lat: number;
    lng: number;
    course: number;
    online: string;
    speed: number;
    altitude: number;
    stop_duration: string;
    moved_timestamp: number;
    address: string;
    tail: Tail[];
    sensors: Sensor[];
  }

  export interface Sensor {
    id: number;
    type: string;
    name: string;
    value: string;
    val: boolean | number | string;
  }

  export interface Tail {
    lat: string;
    lng: string;
  }
}
