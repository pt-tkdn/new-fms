import {
  mapGPSResponseToEntity,
  mapSIMCardResponseToEntity,
} from "#/modules/assets/data/api/assetsMapper";
import httpClient from "#/shared/utils/httpClient";

export const getGpsByAccountId = async (accountId: number) => {
  const response = await httpClient.post(`/gps_by_account`, {
    account_id: accountId,
  });
  return mapGPSResponseToEntity(response.data);
};

export const getSIMCardByAccountId = async (accountId: number) => {
  const response = await httpClient.post(`/sim_card_by_account`, {
    account_id: accountId,
  });
  return mapSIMCardResponseToEntity(response.data);
};
