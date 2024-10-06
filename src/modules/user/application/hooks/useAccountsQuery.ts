import userRepositoryImpl from "#/modules/user/data/userRepositoryImpl";
import { queryKeys } from "#/shared/utils/react-query/queryKeys";
import { useQuery } from "@tanstack/react-query";

export const useAccountsQuery = () => {
  return useQuery({
    queryKey: queryKeys.accounts,
    queryFn: async () => {
      return userRepositoryImpl.getAccounts();
    },
  });
};
