import { useQuery } from "@tanstack/react-query";

import configuriationsRepositoryImpl from "#/modules/configurations/data/configuriationsRepositoryImpl";
import { queryKeys } from "#/shared/utils/react-query/queryKeys";

export const useStopsQuery = (accountId = 0) => {
  return useQuery({
    queryKey: queryKeys.stopsByAccountId(accountId),
    queryFn: async () => {
      return configuriationsRepositoryImpl.getStopsByAccountId(accountId);
    },
    enabled: !!accountId,
  });
};
