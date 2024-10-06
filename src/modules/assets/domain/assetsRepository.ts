import { GPS } from "#/modules/assets/domain/entities/gps";
import { SimCard } from "#/modules/assets/domain/entities/simCard";
import { Vehicle } from "#/modules/assets/domain/entities/vehicle";

export interface AssetsRepository {
  getGpsByAccountId(accountId: number): Promise<GPS[]>;
  getSIMCardByAccountId(accountId: number): Promise<SimCard[]>;
  getVehicleByAccountId(accountId: number): Promise<Vehicle[]>;
}
