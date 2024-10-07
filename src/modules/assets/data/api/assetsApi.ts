import type { AssetsApiDto } from "#/modules/assets/data/api/assetsApiDto";
import {
  mapDriverResponseToEntity,
  mapGPSResponseToEntity,
  mapIButtonResponseToEntity,
  mapSIMCardResponseToEntity,
  mapVehicleResponseToEntity,
} from "#/modules/assets/data/api/assetsMapper";
import httpClient from "#/shared/utils/httpClient";

export const getGpsByAccountId = async (accountId: number) => {
  const response = await httpClient.post<AssetsApiDto.GPSByAccountIDResponse>(
    `/gps_by_account`,
    {
      account_id: accountId,
    },
  );
  return mapGPSResponseToEntity(response.data);
};

export const getSIMCardByAccountId = async (accountId: number) => {
  const response =
    await httpClient.post<AssetsApiDto.SIMCardByAccountIDResponse>(
      `/sim_card_by_account`,
      {
        account_id: accountId,
      },
    );
  return mapSIMCardResponseToEntity(response.data);
};

export const getVehicleByAccountId = async (accountId: number) => {
  const response =
    await httpClient.post<AssetsApiDto.VehicleByAccountIDResponse>(
      `/vehicle_by_account`,
      {
        account_id: accountId,
      },
    );
  return mapVehicleResponseToEntity(response.data);
};

export const getDriversByAccountId = async (accountId: number) => {
  const response =
    await httpClient.post<AssetsApiDto.DriverByAccountIDResponse>(
      `/driver_by_account`,
      {
        account_id: accountId,
      },
    );
  return mapDriverResponseToEntity(response.data);
};

export const getIButtonByAccountId = async (accountId: number) => {
  const response =
    await httpClient.post<AssetsApiDto.IButtonByAccountIDResponse>(
      `/ibutton_by_account`,
      {
        account_id: accountId,
      },
    );
  return mapIButtonResponseToEntity(response.data);
};
