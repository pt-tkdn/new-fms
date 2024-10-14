import { getLiveMaps } from "#/modules/monitoring/data/api/monitoringApi";
import type { MonitoringRepository } from "#/modules/monitoring/domain/monitoringRepository";

const monitoringRepositoryImpl = (): MonitoringRepository => {
  return {
    getVehiclePositionsByAccountId: async (accountId) => {
      const response = await getLiveMaps(accountId);
      return response;
    },
  };
};

// make it a singleton
export default monitoringRepositoryImpl();
