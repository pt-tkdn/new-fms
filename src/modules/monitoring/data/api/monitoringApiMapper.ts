import type { Vehicle } from "#/modules/assets/domain/entities/vehicle";
import { createVehicle } from "#/modules/assets/domain/entities/vehicle";
import type { MonitoringApiDto } from "#/modules/monitoring/data/api/monitoringApiDto";
import { createGpsPosition } from "#/modules/monitoring/domain/entities/gpsPosition";

export const mapLiveMapsResponseToEntity = (
  data: MonitoringApiDto.Vehicle[],
): Vehicle[] => {
  return data.map((item) => {
    return createVehicle({
      vehicleCode: item.vehicle_code,
      vehicleNo: item.vehicle_no,
      id: item.id,
      gpsPosition: createGpsPosition({
        address: item.gps_position.address,
        altitude: item.gps_position.altitude,
        course: item.gps_position.course,
        id: item.gps_position.id,
        lat: item.gps_position.lat,
        lng: item.gps_position.lng,
        movedTimestamp: item.gps_position.moved_timestamp,
        online: item.gps_position.online,
        sensors: item.gps_position.sensors.map((sensor) => ({
          id: sensor.id,
          name: sensor.name,
          type: sensor.type,
          val: sensor.val,
          value: sensor.value,
        })),
        speed: item.gps_position.speed,
        stopDuration: item.gps_position.stop_duration,
        tail: item.gps_position.tail.map((tail) => ({
          lat: tail.lat,
          lng: tail.lng,
        })),
        time: item.gps_position.time,
      }),
      gps: null,
      capacity: null,
      chassisNo: null,
      machineNo: null,
      odometer: null,
      status: null,
      stnkNumber: null,
    });
  });
};
