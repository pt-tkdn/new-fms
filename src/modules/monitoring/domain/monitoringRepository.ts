import type { Vehicle } from "#/modules/assets/domain/entities/vehicle";

export interface MonitoringRepository {
  getVehiclePositionsByAccountId: (accountId: number) => Promise<Vehicle[]>;
}
