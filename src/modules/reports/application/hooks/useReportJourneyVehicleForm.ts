import type { FormApi, Validator } from "@tanstack/react-form";
import { useForm } from "@tanstack/react-form";
import { zodValidator } from "@tanstack/zod-form-adapter";
import dayjs from "dayjs";

import { reportJourneyVehicleValidation } from "#/modules/reports/domain/entities/reportJourneyVehicle";
import type { ReportJourneyVehicleValidation } from "#/modules/reports/domain/entities/reportJourneyVehicle";

export const useReportJourneyVehicleForm = (
  onSubmit?: (props: {
    value: ReportJourneyVehicleValidation;
    formApi: FormApi<
      ReportJourneyVehicleValidation,
      Validator<ReportJourneyVehicleValidation>
    >;
  }) => unknown,
) => {
  const form = useForm<
    ReportJourneyVehicleValidation,
    Validator<ReportJourneyVehicleValidation>
  >({
    defaultValues: {
      vehicleId: 0,
      from: dayjs().startOf("day").toDate(),
      to: dayjs().endOf("day").toDate(),
      stops: 180,
    },
    validatorAdapter: zodValidator(),
    validators: {
      onChange: reportJourneyVehicleValidation,
    },
    onSubmit: onSubmit,
  });

  return form;
};
