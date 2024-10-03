import { getDashboardData } from "#/modules/overviews/data/api/overviewApi";
import { OverviewRepository } from "#/modules/overviews/domain/overviewRepository";

const overviewRepositoryImpl = (): OverviewRepository => {
  return {
    getOverviews: async () => {
      return getDashboardData();
    },
  };
};

export default overviewRepositoryImpl();
