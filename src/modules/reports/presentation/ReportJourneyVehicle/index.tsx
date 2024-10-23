"use client";

import { useReportJourneyVehicle } from "#/modules/reports/application/hooks/useReportJourneyVehicle";

import ReportJourneyVehicleForm from "./ReportJourneyVehicleForm";
import ReportJourneyVehicleSummary from "./ReportJourneyVehicleSummary";
import ReportJourneyVehicleTable from "./ReportJourneyVehicleTable";

const ReportJourneyVehicle = () => {
  const { fetch } = useReportJourneyVehicle();

  return (
    <>
      <ReportJourneyVehicleForm onSubmit={(value) => fetch(value)} />
      <ReportJourneyVehicleSummary />
      <ReportJourneyVehicleTable />
    </>
  );
};
export default ReportJourneyVehicle;
