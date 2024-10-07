import {
  getDriversByAccountId,
  getGpsByAccountId,
  getIButtonByAccountId,
  getSIMCardByAccountId,
  getVehicleByAccountId,
} from "#/modules/assets/data/api/assetsApi";
import type { AssetsRepository } from "#/modules/assets/domain/assetsRepository";

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
    getIButtonByAccountId: (accountId) => {
      return getIButtonByAccountId(accountId);
    },
  };
};

export default assetsRepositoryImpl();
