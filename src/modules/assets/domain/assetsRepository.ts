import type { Driver } from "#/modules/assets/domain/entities/driver";
import type { GPS } from "#/modules/assets/domain/entities/gps";
import type { SimCard } from "#/modules/assets/domain/entities/simCard";
import type { Vehicle } from "#/modules/assets/domain/entities/vehicle";

export interface AssetsRepository {
  getGpsByAccountId(accountId: number): Promise<GPS[]>;
  getSIMCardByAccountId(accountId: number): Promise<SimCard[]>;
  getVehicleByAccountId(accountId: number): Promise<Vehicle[]>;
  getDriversByAccountId(accountId: number): Promise<Driver[]>;
}
