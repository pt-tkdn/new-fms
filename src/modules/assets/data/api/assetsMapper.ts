import { AssetsApiDto } from "#/modules/assets/data/api/assetsApiDto";
import { createGPS, GPS } from "#/modules/assets/domain/entities/gps";
import { createSimCard } from "#/modules/assets/domain/entities/simCard";
import { createVehicle } from "#/modules/assets/domain/entities/vehicle";
import * as activeStatus from "#/modules/assets/domain/valueObjects/activeStatus";

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
            status: activeStatus.fromNumber(asset.sim_card.status),
          }),
    });
  });
};

export const mapSIMCardResponseToEntity = (
  res: AssetsApiDto.SIMCardByAccountIDResponse
) => {
  return res.data.map((simCard) => {
    return createSimCard({
      accountId: simCard.account_id,
      gsmNo: simCard.gsm_no,
      id: simCard.id,
      imsi: simCard.imsi,
      msidn: simCard.msidn,
      operator: simCard.operator,
      status: activeStatus.fromNumber(simCard.status),
    });
  });
};

export const mapVehicleResponseToEntity = (
  res: AssetsApiDto.VehicleResponse
) => {
  return res.data.map((vehicle) => {
    return createVehicle({
      accountId: vehicle.account_id,
      capacity: vehicle.capacity,
      gps: createGPS({
        accountId: vehicle.gps.account_id,
        id: vehicle.gps.id,
        idGps: vehicle.gps.id_gps,
        imei: vehicle.gps.imei,
        model: vehicle.gps.model,
        sensors: vehicle.gps.sensors,
        serialNumber: vehicle.gps.serial_number,
        simCard: !vehicle.gps.sim_card
          ? null
          : createSimCard({
              accountId: vehicle.gps.sim_card.account_id,
              gsmNo: vehicle.gps.sim_card.gsm_no,
              id: vehicle.gps.sim_card.id,
              imsi: vehicle.gps.sim_card.imsi,
              msidn: vehicle.gps.sim_card.msidn,
              operator: vehicle.gps.sim_card.operator,
              status: activeStatus.fromNumber(vehicle.gps.sim_card.status),
            }),
        fuelPrice: vehicle.gps.fuel_price,
        fuelQuantity: vehicle.gps.fuel_quantity,
      }),
      id: vehicle.id,
      odometer: vehicle.odometer,
      status: activeStatus.fromNumber(vehicle.status),
      vehicleCode: vehicle.vehicle_code,
      vehicleNo: vehicle.vehicle_no,
      chassisNo: vehicle.chassis_no,
      machineNo: vehicle.machine_no,
      stnkNumber: vehicle.stnk_number,
    });
  });
};
