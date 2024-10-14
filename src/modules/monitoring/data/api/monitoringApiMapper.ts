import type { Vehicle } from "#/modules/assets/domain/entities/vehicle";
import { createVehicle } from "#/modules/assets/domain/entities/vehicle";
import type { MonitoringApiDto } from "#/modules/monitoring/data/api/monitoringApiDto";

export const mapLiveMapsResponseToEntity = (
  data: MonitoringApiDto.Vehicle[],
): Vehicle[] => {
  return data.map((item) => {
    return createVehicle({
      vehicleCode: item.vehicle_code,
      vehicleNo: item.vehicle_no,
      id: item.id,
      position: {
        lat: item.gps_position.lat,
        lng: item.gps_position.lng,
      },
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
