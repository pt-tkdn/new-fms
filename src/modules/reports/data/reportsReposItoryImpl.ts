import { getReportJourneyVehicle } from "#/modules/reports/data/api/reportsApi";
import type { ReportsRepository } from "#/modules/reports/domain/reportsRepository";

const reportsRepositoryImpl = (): ReportsRepository => {
  return {
    getReportJourneyVehicle: async (vehicleId, stops, from, to) => {
      return getReportJourneyVehicle(vehicleId, stops, from, to);
    },
  };
};

export default reportsRepositoryImpl();
