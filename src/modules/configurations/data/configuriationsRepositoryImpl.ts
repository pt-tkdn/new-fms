import {
  getRoutesByAccountId,
  getStopsByAccountId,
} from "#/modules/configurations/data/api/configurationsApi";
import type { ConfigurationsRepository } from "#/modules/configurations/domain/configurationsRepository";

const configurationsRepositoryImpl = (): ConfigurationsRepository => {
  return {
    getStopsByAccountId: async (accountId: number) => {
      return getStopsByAccountId(accountId);
    },
    getRoutesByAccountId: async (accountId: number) => {
      return getRoutesByAccountId(accountId);
    },
  };
};

export default configurationsRepositoryImpl();
