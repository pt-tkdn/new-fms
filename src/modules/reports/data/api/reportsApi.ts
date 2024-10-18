import { vehicle } from "#/modules/assets/domain/entities/vehicle";
import { mapReportsJourneyVehicleResponseToEntity } from "#/modules/reports/data/api/reportsApiMapper";
import httpClient from "#/shared/utils/httpClient";

export const getReportJourneyVehicle = async (
  vehicleId: number,
  stops: number,
  from: string,
  to: string,
) => {
  const params = {
    vehicle_id: vehicleId,
    from_date: from.split(" ")[0],
    from_time: from.split(" ")[1],
    stops: stops.toString(),
    to_date: to.split(" ")[0],
    to_time: to.split(" ")[1],
  };
  const response = await httpClient.post("/journey_vehicles", params);
  const result = mapReportsJourneyVehicleResponseToEntity(response.data);
  return result;
};
