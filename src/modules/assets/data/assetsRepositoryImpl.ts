import { getGpsByAccountId } from "#/modules/assets/data/api/assetsApi";
import { AssetsRepository } from "#/modules/assets/domain/assetsRepository";

const assetsRepositoryImpl = (): AssetsRepository => {
  return {
    getGpsByAccountId: (accountId) => {
      return getGpsByAccountId(accountId);
    },
  };
};

export default assetsRepositoryImpl();
