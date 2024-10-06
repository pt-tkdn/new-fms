import {
  mapDriverResponseToEntity,
  mapGPSResponseToEntity,
  mapSIMCardResponseToEntity,
  mapVehicleResponseToEntity,
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

export const getVehicleByAccountId = async (accountId: number) => {
  const response = await httpClient.post(`/vehicle_by_account`, {
    account_id: accountId,
  });
  return mapVehicleResponseToEntity(response.data);
};

export const getDriversByAccountId = async (accountId: number) => {
  const response = await httpClient.post(`/driver_by_account`, {
    account_id: accountId,
  });
  return mapDriverResponseToEntity(response.data);
};
