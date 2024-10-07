import { useQuery } from "@tanstack/react-query";

import assetsRepositoryImpl from "#/modules/assets/data/assetsRepositoryImpl";
import { queryKeys } from "#/shared/utils/react-query/queryKeys";

export const useSIMCardsQuery = (accountId?: number) => {
  return useQuery({
    enabled: !!accountId,
    queryKey: queryKeys.simCardsByAccountId(accountId ?? 0),
    queryFn: async () => {
      return assetsRepositoryImpl.getSIMCardByAccountId(accountId ?? 0);
    },
  });
};
