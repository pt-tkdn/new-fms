import { useQuery, useQueryClient } from "@tanstack/react-query";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);

import reportsRepositoryImpl from "#/modules/reports/data/reportsRepositoryImpl";
import type { GraphSensor } from "#/modules/reports/domain/entities/reportGraphSensor";
import type { ReportJourneyVehicleValidation } from "#/modules/reports/domain/entities/reportJourneyVehicle";
import { queryKeys } from "#/shared/utils/react-query/queryKeys";

export const useReportGraphSensors = () => {
  const client = useQueryClient();
  const queryInfo = useQuery<GraphSensor[]>({
    queryKey: queryKeys.reportsGraphSensors,
    enabled: false,
  });

  const fetch = (value: ReportJourneyVehicleValidation) => {
    return client.fetchQuery({
      queryKey: queryKeys.reportsGraphSensors,
      staleTime: 0,
      gcTime: 5 * 60 * 1000,
      queryFn: () => {
        return reportsRepositoryImpl.getReportGraphSensors(
          value.vehicleId,
          value.stops,
          dayjs(value.from).utc().format("YYYY-MM-DD HH:mm"),
          dayjs(value.to).utc().format("YYYY-MM-DD HH:mm"),
        );
      },
    });
  };

  return {
    ...queryInfo,
    fetch,
  };
};
