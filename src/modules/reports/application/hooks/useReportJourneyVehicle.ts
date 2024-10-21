import { useQuery, useQueryClient } from "@tanstack/react-query";
import dayjs from "dayjs";

import reportsRepositoryImpl from "#/modules/reports/data/reportsRepositoryImpl";
import type {
  ReportJourneyVehicle,
  ReportJourneyVehicleValidation,
} from "#/modules/reports/domain/entities/reportJourneyVehicle";
import { queryKeys } from "#/shared/utils/react-query/queryKeys";

export const useReportJourneyVehicle = () => {
  const client = useQueryClient();
  const queryInfo = useQuery<ReportJourneyVehicle[]>({
    queryKey: queryKeys.reportsJourneyVehicle,
    enabled: false,
  });

  const fetch = (value: ReportJourneyVehicleValidation) => {
    return client.fetchQuery({
      queryKey: queryKeys.reportsJourneyVehicle,
      staleTime: 0,
      gcTime: 5 * 60 * 1000,
      queryFn: () => {
        return reportsRepositoryImpl.getReportJourneyVehicle(
          value.vehicleId,
          value.stops,
          dayjs(value.from).format("YYYY-MM-DD HH:mm"),
          dayjs(value.to).format("YYYY-MM-DD HH:mm"),
        );
      },
    });
  };

  return {
    ...queryInfo,
    fetch,
  };
};
