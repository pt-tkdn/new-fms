import { GPS } from "#/modules/assets/domain/entities/gps";
import { SimCard } from "#/modules/assets/domain/entities/simCard";

export interface AssetsRepository {
  getGpsByAccountId(accountId: number): Promise<GPS[]>;
  getSIMCardByAccountId(accountId: number): Promise<SimCard[]>;
}
