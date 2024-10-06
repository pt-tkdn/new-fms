import assetsRepositoryImpl from "#/modules/assets/data/assetsRepositoryImpl";
import { queryKeys } from "#/shared/utils/react-query/queryKeys";
import { useQuery } from "@tanstack/react-query";

export const useDriverQuery = (accountId?: number) => {
  return useQuery({
    enabled: !!accountId,
    queryKey: queryKeys.driversByAccountId(accountId ?? 0),
    queryFn: async () => {
      return assetsRepositoryImpl.getDriversByAccountId(accountId ?? 0);
    },
  });
};
