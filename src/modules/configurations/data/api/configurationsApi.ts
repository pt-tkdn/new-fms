import type { ConfigurationsApiDto } from "#/modules/configurations/data/api/configurationsApiDto";
import {
  mapRoutesByAccountIdResponseToEntity,
  mapStopsByAccountIdResponseToEntity,
} from "#/modules/configurations/data/api/configurationsApiMapper";
import httpClient from "#/shared/utils/httpClient";

export const getStopsByAccountId = async (accountId: number) => {
  const res =
    await httpClient.post<ConfigurationsApiDto.StopsByAccountIdResponse>(
      `/stop_by_account`,
      { account_id: accountId },
    );

  return mapStopsByAccountIdResponseToEntity(res.data);
};

export const getRoutesByAccountId = async (accountId: number) => {
  const res =
    await httpClient.post<ConfigurationsApiDto.RoutesByAccountIdResponse>(
      `/route_by_account`,
      { account_id: accountId },
    );

  return mapRoutesByAccountIdResponseToEntity(res.data);
};
