import { AssetsApiDto } from "#/modules/assets/data/api/assetsApiDto";
import { createGPS, GPS } from "#/modules/assets/domain/entities/gps";
import { createSimCard } from "#/modules/assets/domain/entities/simCard";

export const mapGPSResponseToEntity = (
  res: AssetsApiDto.GPSByAccountIDResponse
): GPS[] => {
  return res.data.map((asset) => {
    return createGPS({
      accountId: asset.account_id,
      fuelPrice: asset.fuel_price,
      fuelQuantity: asset.fuel_quantity,
      id: asset.id,
      idGps: asset.id_gps,
      imei: asset.imei,
      model: asset.model,
      sensors: asset.sensors,
      serialNumber: asset.serial_number,
      simCard: !asset.sim_card
        ? null
        : createSimCard({
            accountId: asset.sim_card.account_id,
            gsmNo: asset.sim_card.gsm_no,
            id: asset.sim_card.id,
            imsi: asset.sim_card.imsi,
            msidn: asset.sim_card.msidn,
            operator: asset.sim_card.operator,
            status: asset.sim_card.status,
          }),
    });
  });
};
