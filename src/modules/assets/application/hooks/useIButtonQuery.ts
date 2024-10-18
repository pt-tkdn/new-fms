import { useQuery } from "@tanstack/react-query";

import assetsRepositoryImpl from "#/modules/assets/data/assetsRepositoryImpl";
import { queryKeys } from "#/shared/utils/react-query/queryKeys";

export const useIButtonQuery = (accountId?: number) => {
  return useQuery({
    enabled: !!accountId,
    queryKey: queryKeys.iButtonsByAccountId(accountId ?? 0),
    queryFn: async () => {
      return assetsRepositoryImpl.getIButtonByAccountId(accountId ?? 0);
    },
  });
};
