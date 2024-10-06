import {
  getDriversByAccountId,
  getGpsByAccountId,
  getSIMCardByAccountId,
  getVehicleByAccountId,
} from "#/modules/assets/data/api/assetsApi";
import { AssetsRepository } from "#/modules/assets/domain/assetsRepository";

const assetsRepositoryImpl = (): AssetsRepository => {
  return {
    getGpsByAccountId: (accountId) => {
      return getGpsByAccountId(accountId);
    },
    getSIMCardByAccountId: (accountId) => {
      return getSIMCardByAccountId(accountId);
    },
    getVehicleByAccountId: (accountId) => {
      return getVehicleByAccountId(accountId);
    },
    getDriversByAccountId: (accountId) => {
      return getDriversByAccountId(accountId);
    },
  };
};

export default assetsRepositoryImpl();
