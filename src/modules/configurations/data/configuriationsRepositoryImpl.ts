import { getStopsByAccountId } from "#/modules/configurations/data/api/configurationsApi";
import type { ConfigurationsRepository } from "#/modules/configurations/domain/configurationsRepository";

const configurationsRepositoryImpl = (): ConfigurationsRepository => {
  return {
    getStopsByAccountId: async (accountId: number) => {
      return getStopsByAccountId(accountId);
    },
  };
};

export default configurationsRepositoryImpl();
