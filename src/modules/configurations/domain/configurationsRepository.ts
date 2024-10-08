import type { Stop } from "#/modules/configurations/domain/entities/stop";

export interface ConfigurationsRepository {
  getStopsByAccountId(accountId: number): Promise<Stop[]>;
}
