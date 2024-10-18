import { useMutation } from "@tanstack/react-query";

import reportsRepositoryImpl from "#/modules/reports/data/reportsRepositoryImpl";
import { ReportJourneyVehicleValidation } from "#/modules/reports/domain/entities/reportJourneyVehicle";
import dayjs from "dayjs";
import { queryKeys } from "#/shared/utils/react-query/queryKeys";

export const useReportJourneyVehicle = () => {
  return useMutation({
    mutationFn: (params: ReportJourneyVehicleValidation) => {
      return reportsRepositoryImpl.getReportJourneyVehicle(
        params.vehicleId,
        params.stops,
        dayjs(params.from).format("YYYY-MM-DD HH:mm"),
        dayjs(params.to).format("YYYY-MM-DD HH:mm"),
      );
    },
    mutationKey: queryKeys.reportsJourneyVehicle,
  });
};
