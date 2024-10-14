import type { MonitoringApiDto } from "#/modules/monitoring/data/api/monitoringApiDto";
import { mapLiveMapsResponseToEntity } from "#/modules/monitoring/data/api/monitoringApiMapper";
import httpClient from "#/shared/utils/httpClient";

export const getLiveMaps = async (accountId: number) => {
  const response = await httpClient.post<MonitoringApiDto.LiveMapsResponse>(
    "/live_maps",
    {
      account_id: accountId,
    },
  );
  const parsecData = mapLiveMapsResponseToEntity(response.data.data);
  return parsecData;
};
