import type { Event } from "./entities/event";
import type { VehicleStatus } from "./valueObjects/vehicleStatus";

export interface GetOverviewsResult {
  vehicleStatus: VehicleStatus[];
  recentEvents: Event[];
}

export interface OverviewRepository {
  getOverviews: () => Promise<GetOverviewsResult>;
}
