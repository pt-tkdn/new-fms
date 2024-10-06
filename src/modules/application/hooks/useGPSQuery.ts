import assetsRepositoryImpl from "#/modules/assets/data/assetsRepositoryImpl";
import { queryKeys } from "#/shared/utils/react-query/queryKeys";
import { useQuery } from "@tanstack/react-query";

export const useGPSQuery = (accountId?: number) => {
  return useQuery({
    enabled: !!accountId,
    queryKey: queryKeys.gpsByAccountId(accountId ?? 0),
    queryFn: async () => {
      return assetsRepositoryImpl.getGpsByAccountId(accountId ?? 0);
    },
  });
};
