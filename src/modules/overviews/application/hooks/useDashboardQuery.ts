import { useQuery } from "@tanstack/react-query";

import overviewRepositoryImpl from "#/modules/overviews/data/overviewRepositoryImpl";
import { queryKeys } from "#/shared/utils/react-query/queryKeys";

export const useDashboardQuery = () => {
  const queryInfo = useQuery({
    queryKey: queryKeys.dashboard,
    queryFn: overviewRepositoryImpl.getOverviews,
  });

  return queryInfo;
};
