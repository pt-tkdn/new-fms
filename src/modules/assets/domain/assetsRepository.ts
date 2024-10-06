import { GPS } from "#/modules/assets/domain/entities/gps";

export interface AssetsRepository {
  getGpsByAccountId(accountId: number): Promise<GPS[]>;
}
