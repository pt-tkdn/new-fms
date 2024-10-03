import { BaseHttpResponse } from "#/shared/utils/httpClient";

export namespace OverviewDto {
  export type DashboardResponse = BaseHttpResponse<DashboardData>;

  export interface DashboardData {
    status_vehicle: StatusVehicle[];
    top_checkpoint: StatusVehicle[];
    recent_events: RecentEvent[];
    vehicle_locations: DataVehicleLocation[];
  }

  export interface RecentEvent {
    id: number;
    account_id: number;
    vehicle_id: number;
    driver_id: null;
    alert_id: number;
    type: string;
    message: string;
    lat: number;
    lng: number;
    speed: number;
    additional: string;
    status: number;
    created_at: Date;
    account: null;
    vehicle: Vehicle;
    driver: null;
    alert: null;
  }

  export interface Vehicle {
    id: number;
    account_id: number;
    vehicle_no: string;
    vehicle_code: string;
    stnk_number: null;
    machine_no: null | string;
    chassis_no: null | string;
    capacity: number | null;
    status: number;
    total_seat: number;
    pic_url: string;
    type: string;
    color: null | string;
    manufacture: null | string;
    manufacture_year: number | null;
    odometer: number;
    stnk_date: null;
    keur_number: null;
    keur_date: null;
    kp_number: null;
    kp_date: null;
    sipa_number: null;
    sipa_date: null;
    ibm_number: null;
    ibm_date: null;
    other_number: null;
    other_number_date: null;
    created_by: number;
    updated_by: number;
    gps_id: number;
    created_at: Date;
    updated_at: Date;
  }

  export interface StatusVehicle {
    label: string;
    data: number;
    color: string;
  }

  export interface DataVehicleLocation {
    account_id: number;
    account_name: string;
    vehicle_location: VehicleLocationVehicleLocation[];
  }

  export interface VehicleLocationVehicleLocation {
    id: number;
    vehicle_no: string;
    vehicle_code: string;
    gps_position: GpsPosition;
  }

  export interface GpsPosition {
    id: number;
    time: Date | TimeEnum;
    lat: number;
    lng: number;
    course: number;
    online: Online;
    speed: number;
    altitude: number;
    stop_duration: string;
    moved_timestamp: number;
    address: Address;
    tail: Tail[];
    sensors: Sensor[];
  }

  export enum Address {
    Empty = "-",
  }

  export enum Online {
    ACK = "ack",
    Offline = "offline",
    Online = "online",
  }

  export interface Sensor {
    id: number;
    type: Type;
    name: Name;
    value: string;
    val: boolean | number | string;
  }

  export enum Name {
    Battery = "battery",
    BatteryBeacon2 = "Battery Beacon 2",
    Beacon1 = "Beacon 1",
    Beacon2 = "Beacon 2",
    Beacon3 = "Beacon 3",
    Beacon4 = "Beacon 4",
    Beacon5 = "Beacon 5",
    BeaconTemperature1 = "Beacon temperature 1",
    BeaconTemperature2 = "Beacon temperature 2",
    ChargerConnected = "Charger connected",
    Command = "Command ",
    DoorTangki = "Door Tangki",
    Driver = "driver",
    EngineRPM = "Engine RPM",
    EngineWorktime = "Engine Worktime",
    FuelAirMineral1L = "Fuel (Air mineral 1L)",
    FuelConsume = "Fuel Consume",
    FuelGensetGenset = "Fuel Genset (Genset)",
    FuelHinoHINO300 = "Fuel Hino (HINO 300)",
    FuelICUZUELF = "fuel (ICUZU ELF)",
    FuelIsuzuELF = "Fuel (Isuzu ELF)",
    FuelTest = "Fuel (Test)",
    HeightOfLiquid = "Height of liquid",
    HinoRK280HinoRK280 = "Hino RK 280 (Hino RK280)",
    HoursMeter = "Hours meter",
    IButton = "IButton",
    Ignition = "ignition",
    JarakBeacon1 = "Jarak Beacon 1",
    JarakBeacon2 = "Jarak Beacon 2",
    JarakBeacon3 = "Jarak Beacon 3",
    JarakBeacon4 = "Jarak Beacon 4",
    JarakBeacon5 = "Jarak Beacon 5",
    NameBattery = "Battery",
    NameCommand = "Command",
    NameHoursMeter = "Hours Meter",
    Odometer = "odometer",
    RSSIBeacon1 = "RSSI Beacon 1",
    RSSIBeacon2 = "RSSI Beacon 2",
    RSSIBeacon3 = "RSSI Beacon 3",
    RSSIBeacon4 = "RSSI Beacon 4",
    RSSIBeacon5 = "RSSI Beacon 5",
    Seal = "Seal",
    Temperature = "temperature",
    Temperature1 = "Temperature1",
    Temperature2 = "temperature2",
    Temperature3 = "temperature3",
  }

  export enum Type {
    Acc = "acc",
    Battery = "battery",
    Door = "door",
    EngineHours = "engine_hours",
    FuelTankCalibration = "fuel_tank_calibration",
    Logical = "logical",
    Numerical = "numerical",
    Odometer = "odometer",
    RFID = "rfid",
    Tachometer = "tachometer",
    Temperature = "temperature",
    Textual = "textual",
  }

  export interface Tail {
    lat: string;
    lng: string;
  }

  export enum TimeEnum {
    NotConnected = "Not connected",
  }
}
