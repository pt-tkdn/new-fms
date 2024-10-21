"use client";

import type { Validator } from "@tanstack/react-form";
import { useForm } from "@tanstack/react-form";
import { zodValidator } from "@tanstack/zod-form-adapter";
import dayjs from "dayjs";
import { useEffect } from "react";

import { useVehicleState } from "#/modules/assets/application/context/VehicleProvider";
import SelectVehicleByAccount from "#/modules/assets/presentation/SelectVehicleByAccount";
import { useReportJourneyVehicle } from "#/modules/reports/application/hooks/useReportJourneyVehicle";
import type { ReportJourneyVehicleValidation } from "#/modules/reports/domain/entities/reportJourneyVehicle";
import { reportJourneyVehicleValidation } from "#/modules/reports/domain/entities/reportJourneyVehicle";
import DateTimePicker from "#/modules/reports/presentation/components/DateTimePicker";
import SelectStopTime from "#/modules/reports/presentation/components/SelectStopTime";
import SelectAccount from "#/modules/user/presentation/SelectAccount";
import { Button } from "#/shared/components/ui/button";

const ReportJourneyVehicleForm: React.FC = () => {
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
    onSubmit: (values) => {
      fetch(values.value);
    },
  });
  const { fetch } = useReportJourneyVehicle(form.state.values);

  const vehicle = useVehicleState();

  // This is not ideal, but it's a quick way to set the accountId and vehicleId
  // ! TODO !: Refactor this to use the form state
  useEffect(() => {
    if (vehicle?.id) {
      form.setFieldValue("vehicleId", vehicle.id);
    }
    // TODO: This is a workaround to validate all fields on mount
    form.validateAllFields("mount");
  }, [form, vehicle]);

  return (
    <div className="flex flex-col gap-y-4">
      <div className="grid grid-cols-3 gap-x-4">
        <SelectAccount className="w-full" />
        <SelectVehicleByAccount className="w-full" />
      </div>
      <div className="flex justify-between items-end gap-x-4">
        <form.Field name="from">
          {(fieldApi) => {
            return (
              <DateTimePicker
                className="w-1/3"
                label="From"
                value={fieldApi.state.value}
                onDateTimeChange={fieldApi.handleChange}
              />
            );
          }}
        </form.Field>

        <form.Field name="to">
          {(fieldApi) => {
            return (
              <>
                <DateTimePicker
                  className="w-1/3"
                  label="To"
                  value={fieldApi.state.value}
                  onDateTimeChange={(date) => {
                    console.log("to date", date);
                    fieldApi.handleChange(date);
                    console.log("fieldApi.state", fieldApi.state.value);
                  }}
                />
              </>
            );
          }}
        </form.Field>
        <form.Field name="stops">
          {(fieldApi) => {
            return (
              <SelectStopTime
                value={fieldApi.state.value}
                onChange={fieldApi.handleChange}
                className="w-1/3"
              />
            );
          }}
        </form.Field>
      </div>
      <form.Subscribe
        selector={(state) => [state.canSubmit, state.isSubmitting]}
      >
        {([canSubmit]) => (
          <Button
            onClick={() => form.handleSubmit()}
            disabled={!canSubmit}
            className="w-min"
          >
            Show Report
          </Button>
        )}
      </form.Subscribe>
    </div>
  );
};

export default ReportJourneyVehicleForm;
