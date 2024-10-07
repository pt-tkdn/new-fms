import type { OverviewDto } from "#/modules/overviews/data/api/overviewDto";
import type { GetOverviewsResult } from "#/modules/overviews/domain/overviewRepository";
import { createVehicleStatus } from "#/modules/overviews/domain/valueObjects/vehicleStatus";

export const mapDashboardResponseToEntity = (
  response: OverviewDto.DashboardResponse,
): GetOverviewsResult => {
  return {
    vehicleStatus: response.data.status_vehicle.map(createVehicleStatus),
    recentEvents: response.data.recent_events.map((event) => {
      return {
        accountId: event.account_id,
        additional: event.additional,
        alertId: event.alert_id,
        createdAt: new Date(event.created_at),
        driverId: event.driver_id,
        id: event.id,
        lat: event.lat,
        lng: event.lng,
        message: event.message,
        speed: event.speed,
        status: event.status,
        type: event.type,
        vehicleId: event.vehicle_id,
        /** TODO */
        account: null,
        alert: null,
        driver: null,
        vehicle: null,
      };
    }),
  };
};
