import type { AssetsApiDto } from "#/modules/assets/data/api/assetsApiDto";
import type { Driver } from "#/modules/assets/domain/entities/driver";
import { createDriver } from "#/modules/assets/domain/entities/driver";
import type { GPS } from "#/modules/assets/domain/entities/gps";
import { createGPS } from "#/modules/assets/domain/entities/gps";
import { createIButton } from "#/modules/assets/domain/entities/iButton";
import type { SimCard } from "#/modules/assets/domain/entities/simCard";
import { createSimCard } from "#/modules/assets/domain/entities/simCard";
import { createVehicle } from "#/modules/assets/domain/entities/vehicle";
import * as activeStatus from "#/shared/core/domain/valueObjects/activeStatus";

export const mapGPSResponseToEntity = (
  res: AssetsApiDto.GPSByAccountIDResponse,
): GPS[] => {
  return res.data.map((asset) => {
    return createGPS({
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
  res: AssetsApiDto.SIMCardByAccountIDResponse,
): SimCard[] => {
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
  res: AssetsApiDto.VehicleByAccountIDResponse,
) => {
  return res.data.map((vehicle) => {
    return createVehicle({
      position: null,
      capacity: parseInt(vehicle.capacity ?? "0"),
      gps: createGPS({
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

export const mapDriverResponseToEntity = (
  res: AssetsApiDto.DriverByAccountIDResponse,
): Driver[] => {
  return res.data.map((driver) => {
    return createDriver({
      address: driver.address,
      id: driver.id,
      name: driver.name,
      phone: driver.phone_number,
      status: activeStatus.fromNumber(driver.status),
      code: driver.driver_code,
      gender: driver.gender,
      ktpNumber: driver.ktp_number,
      licenseExpired: driver.license_number_date,
      licenseNumber: driver.license_number,
      licenseType: driver.license_number_type,
      iButton: createIButton({
        no: driver.ibutton.ibutton_no,
        id: driver.ibutton.id,
        status: activeStatus.fromNumber(driver.ibutton.status),
        driverName: driver.name,
      }),
    });
  });
};

export const mapIButtonResponseToEntity = (
  res: AssetsApiDto.IButtonByAccountIDResponse,
) => {
  return res.data.map((iButton) => {
    return createIButton({
      id: iButton.id,
      no: iButton.ibutton_no,
      status: activeStatus.fromNumber(iButton.status),
      driverName: iButton.driver.name,
    });
  });
};
