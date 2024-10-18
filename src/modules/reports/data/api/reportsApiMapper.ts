import type { ReportsApiDto } from "#/modules/reports/data/api/reportsApiDto";
import type { ReportJourneyVehicle } from "#/modules/reports/domain/entities/reportJourneyVehicle";

export const mapReportsJourneyVehicleResponseToEntity = (
  response: ReportsApiDto.ReportsJourneyVehicleResponse,
): ReportJourneyVehicle[] => {
  return response.data.map((report) => {
    return {
      averageSpeed: report.average_speed,
      distance: report.distance,
      driveDuration: report.drive_duration,
      duration: report.duration,
      end: report.end,
      endLocation: report.end_location,
      fuelConsumptionGps: report.fuel_consumption_gps,
      fuelPriceGps: report.fuel_price_gps,
      start: report.start,
      startLocation: report.start_location,
      status: report.status,
      stopDuration: report.stop_duration,
      topSpeed: report.top_speed,
    };
  });
};
