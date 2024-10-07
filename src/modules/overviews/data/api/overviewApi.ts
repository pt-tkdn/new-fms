import type { OverviewDto } from "#/modules/overviews/data/api/overviewDto";
import { mapDashboardResponseToEntity } from "#/modules/overviews/data/api/overviewMapper";
import httpClient from "#/shared/utils/httpClient";

export const getDashboardData = async () => {
  const response = await httpClient.get<OverviewDto.DashboardResponse>(
    "dashboard",
  );
  return mapDashboardResponseToEntity(response.data);
};
