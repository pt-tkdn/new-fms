import { VehicleStatus } from "./valueObjects/vehicleStatus";
import { Event } from "./entities/event";

export interface GetOverviewsResult {
  vehicleStatus: VehicleStatus[];
  recentEvents: Event[];
}

export interface OverviewRepository {
  getOverviews: () => Promise<GetOverviewsResult>;
}
