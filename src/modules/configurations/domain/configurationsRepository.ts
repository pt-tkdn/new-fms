import type { Route } from "#/modules/configurations/domain/entities/route";
import type { Stop } from "#/modules/configurations/domain/entities/stop";

export interface ConfigurationsRepository {
  getStopsByAccountId(accountId: number): Promise<Stop[]>;
  getRoutesByAccountId(accountId: number): Promise<Route[]>;
}
