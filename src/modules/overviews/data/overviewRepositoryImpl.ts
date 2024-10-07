import { getDashboardData } from "#/modules/overviews/data/api/overviewApi";
import type { OverviewRepository } from "#/modules/overviews/domain/overviewRepository";

const overviewRepositoryImpl = (): OverviewRepository => {
  return {
    getOverviews: async () => {
      return getDashboardData();
    },
  };
};

export default overviewRepositoryImpl();
