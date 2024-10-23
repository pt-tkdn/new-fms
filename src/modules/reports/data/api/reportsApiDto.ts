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

  export type ReportsGraphSensorsResponse =
    BaseHttpResponse<ReportGraphSensorsData>;

  export interface ReportGraphSensorsData {
    data: Data[];
    sensor_data: SensorData[];
    sensors: Sensor[];
  }

  export interface Data {
    a: number;
    c: string;
    cr: number;
    d: number;
    id: number;
    lat: number;
    lng: number;
    s: number;
    s10214: null;
    s12067: number;
    s12308: number;
    s4340: number;
    s8036: null;
    st: string;
    t: string;
    v: number;
  }

  export interface SensorData {
    id: number;
    sensor_name: string;
    sensor_type: string;
    tag_name: string;
    show_graph: number;
    on_value: null | string;
    off_value: null | string;
    shown_value_by: ShownValueBy;
    odometer_value_by: null | string;
    unit_of_measurement: string;
    fuel_tank_name: null | string;
    formula: Formula;
    on_tag_value: null | string;
    off_tag_value: null | string;
    full_tank: null | string;
    full_tank_value: null | string;
    min_value: null | string;
    max_value: null | string;
    parameter_value: null | string;
    summary_columns: null | string;
    calibrations: null | string;
  }

  export enum Formula {
    Empty = "",
    The1060Value102 = "10^((-60-[value])/(10*2))",
    Value = "[value]",
    Value10 = "[value]/10",
    Value1000 = "[value]/1000",
  }

  export enum ShownValueBy {
    Empty = "",
    TagValue = "tag_value",
  }

  export interface Sensor {
    key: string;
    name: string;
    unit: string;
  }
}
